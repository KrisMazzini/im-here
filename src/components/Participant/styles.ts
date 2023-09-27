import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#1f1e25',
    marginBottom: 10,
  },

  name: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#fff',
  },

  button: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#e23c44',
  },

  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
})
