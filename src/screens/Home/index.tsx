import { useState } from 'react'
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])

  const [newParticipant, setNewParticipant] = useState('')

  function handleAddParticipant() {
    if (!newParticipant) {
      return Alert.alert('Falha ao adicionar participante', 'Informe um nome')
    }

    if (participants.includes(newParticipant)) {
      return Alert.alert(
        'Falha ao adicionar participante',
        'Já existe um participante com esse nome',
      )
    }

    setParticipants((prevState) => [...prevState, newParticipant])
    setNewParticipant('')
  }

  function handleRemoveParticipant(participantToRemove: string) {
    Alert.alert(
      'Remover',
      `Deseja remover o(a) participante ${participantToRemove}?`,
      [
        {
          text: 'Sim',
          onPress: () =>
            setParticipants((prevState) =>
              prevState.filter(
                (participant) => participant !== participantToRemove,
              ),
            ),
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          value={newParticipant}
          onChangeText={setNewParticipant}
        />

        <TouchableOpacity
          style={newParticipant ? styles.button : styles.disabledButton}
          onPress={handleAddParticipant}
          disabled={!newParticipant}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista
            de presença!
          </Text>
        )}
      />
    </View>
  )
}
