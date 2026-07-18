import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function TuningScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔧 Tuning Einstellungen</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Geschwindigkeitslimit</Text>
        <Text style={styles.value}>32 km/h</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Motor Leistung</Text>
        <Text style={styles.value}>250W</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Bremskraft</Text>
        <Text style={styles.value}>50%</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#334155',
  },
  label: {
    color: '#94a3b8',
    fontSize: 14,
  },
  value: {
    color: '#3b82f6',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
})
