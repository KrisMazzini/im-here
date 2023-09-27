import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#131016',
  },

  eventName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },

  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },

  form: {
    width: '100%',
    marginTop: 36,
    marginBottom: 42,
    flexDirection: 'row',
    gap: 12,
  },

  input: {
    flex: 1,
    height: 56,
    padding: 16,
    borderRadius: 5,
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 16,
  },

  button: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#31cf67',
  },

  disabledButton: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#a3a3a3',
  },

  buttonText: {
    color: '#fff',
    fontSize: 24,
  },

  emptyListText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
})
