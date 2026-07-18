import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native'
import { LineChart } from 'react-native-chart-kit'

const screenWidth = Dimensions.get('window').width

export default function HomeScreen() {
  const [connected, setConnected] = useState(false)
  const [speed, setSpeed] = useState(0)
  const [battery, setBattery] = useState(85)
  const [temperature, setTemperature] = useState(32)
  const [power, setPower] = useState(250)

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(prev => Math.min(65, Math.max(0, prev + (Math.random() - 0.5) * 5)))
      setBattery(prev => Math.min(100, Math.max(0, prev + (Math.random() - 0.5) * 2)))
      setTemperature(prev => Math.max(20, Math.min(60, prev + (Math.random() - 0.5) * 2)))
      setPower(prev => Math.min(800, Math.max(0, prev + (Math.random() - 0.5) * 50)))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleConnect = () => {
    setConnected(!connected)
    Alert.alert(
      connected ? 'Getrennt' : 'Verbunden',
      connected ? 'Ninebot getrennt' : 'Ninebot verbunden!'
    )
  }

  const chartData = {
    labels: ['10m', '20m', '30m', '40m', '50m', '60m'],
    datasets: [
      {
        data: [20, 30, 25, 40, 35, 50],
        color: () => '#3b82f6',
        strokeWidth: 2,
      },
    ],
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🛴 Ninebot Tuning</Text>
        <TouchableOpacity
          style={[styles.connectBtn, connected && styles.connectBtnActive]}
          onPress={handleConnect}
        >
          <Text style={styles.connectBtnText}>
            {connected ? '🟢 Verbunden' : '🔴 Nicht verbunden'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Geschwindigkeit</Text>
          <Text style={styles.statValue}>{speed.toFixed(1)}</Text>
          <Text style={styles.statUnit}>km/h</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Batterie</Text>
          <Text style={styles.statValue}>{battery.toFixed(0)}</Text>
          <Text style={styles.statUnit}>%</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Temperatur</Text>
          <Text style={styles.statValue}>{temperature.toFixed(1)}</Text>
          <Text style={styles.statUnit}>°C</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Motor Power</Text>
          <Text style={styles.statValue}>{power.toFixed(0)}</Text>
          <Text style={styles.statUnit}>W</Text>
        </View>
      </View>

      {/* Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>📊 Live Daten</Text>
        <LineChart
          data={chartData}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#1e293b',
            backgroundGradientFrom: '#0f172a',
            backgroundGradientTo: '#1e293b',
            color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(148, 163, 184, ${opacity})`,
            style: { borderRadius: 16 },
            propsForDots: {
              r: '4',
              strokeWidth: '2',
              stroke: '#3b82f6',
            },
          }}
          style={{ borderRadius: 16, marginVertical: 8 }}
        />
      </View>

      {/* Profiles */}
      <View style={styles.profilesContainer}>
        <Text style={styles.sectionTitle}>📋 Profile</Text>
        <TouchableOpacity style={[styles.profileCard, styles.profileActive]}>
          <Text style={styles.profileName}>City Mode</Text>
          <Text style={styles.profileDesc}>20-30 km/h</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileCard}>
          <Text style={styles.profileName}>Sport Mode</Text>
          <Text style={styles.profileDesc}>Max Power</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileCard}>
          <Text style={styles.profileName}>Eco Mode</Text>
          <Text style={styles.profileDesc}>Max Range</Text>
        </TouchableOpacity>
      </View>

      {/* Tuning Panel */}
      {connected && (
        <View style={styles.tuningPanel}>
          <Text style={styles.sectionTitle}>🔧 Tuning Panel</Text>
          
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Geschwindigkeitslimit: 32 km/h</Text>
            <View style={styles.slider} />
          </View>

          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Motor Leistung: 250W</Text>
            <View style={styles.slider} />
          </View>

          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Bremskraft: 50%</Text>
            <View style={styles.slider} />
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.saveBtn}>
              <Text style={styles.saveBtnText}>💾 Speichern</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.resetBtn}>
              <Text style={styles.resetBtnText}>↺ Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Quick Actions */}
      <View style={styles.actionsContainer}>
        <Text style={styles.sectionTitle}>⚡ Quick Actions</Text>
        <View style={styles.actionGrid}>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#10b981' }]}>
            <Text style={styles.actionBtnText}>Power</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#3b82f6' }]}>
            <Text style={styles.actionBtnText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#a855f7' }]}>
            <Text style={styles.actionBtnText}>Backup</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#f59e0b' }]}>
            <Text style={styles.actionBtnText}>Diagnose</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    backgroundColor: '#1e40af',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  connectBtn: {
    backgroundColor: '#dc2626',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  connectBtnActive: {
    backgroundColor: '#16a34a',
  },
  connectBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 12,
    minWidth: '45%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  statLabel: {
    color: '#94a3b8',
    fontSize: 12,
    marginBottom: 5,
  },
  statValue: {
    color: '#3b82f6',
    fontSize: 24,
    fontWeight: 'bold',
  },
  statUnit: {
    color: '#64748b',
    fontSize: 12,
  },
  chartContainer: {
    backgroundColor: '#1e293b',
    margin: 20,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  chartTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profilesContainer: {
    padding: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  profileCard: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#334155',
  },
  profileActive: {
    borderColor: '#3b82f6',
    backgroundColor: '#1e40af30',
  },
  profileName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  profileDesc: {
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 5,
  },
  tuningPanel: {
    backgroundColor: '#1e293b',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  sliderContainer: {
    marginBottom: 20,
  },
  sliderLabel: {
    color: '#e2e8f0',
    fontSize: 14,
    marginBottom: 10,
  },
  slider: {
    height: 6,
    backgroundColor: '#334155',
    borderRadius: 3,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  saveBtn: {
    flex: 1,
    backgroundColor: '#3b82f6',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resetBtn: {
    flex: 1,
    backgroundColor: '#475569',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  resetBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  actionsContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  actionBtn: {
    flex: 1,
    minWidth: '45%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
})
