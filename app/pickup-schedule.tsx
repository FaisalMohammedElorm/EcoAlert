import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ArrowLeft, Calendar, Clock } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PickupScheduleScreen() {
  const [selectedWasteTypes, setSelectedWasteTypes] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const wasteTypes = [
    { id: 'household', label: 'Household', color: '#4CAF50' },
    { id: 'plastic', label: 'Plastic', color: '#2196F3' },
    { id: 'organic', label: 'Organic', color: '#FF9800' },
    { id: 'construction', label: 'Construction', color: '#9C27B0' },
    { id: 'electronic', label: 'Electronic', color: '#F44336' },
    { id: 'general', label: 'General Cleaning', color: '#607D8B' },
  ];

  const toggleWasteType = (typeId: string) => {
    setSelectedWasteTypes(prev => 
      prev.includes(typeId) 
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    );
  };

  const handleSchedulePickup = async () => {
    if (selectedWasteTypes.length === 0) {
      Alert.alert('Selection Required', 'Please select at least one waste type.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert(
        'Pickup Scheduled!',
        'Your waste pickup has been scheduled successfully. You will receive a confirmation shortly.',
        [
          {
            text: 'OK',
            onPress: () => router.back(),
          },
        ]
      );
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>PICK UP</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Date Selection */}
        <View style={styles.section}>
          <View style={styles.dateContainer}>
            <Calendar size={20} color="#666" />
            <Text style={styles.dateText}>dd/mm/yr</Text>
          </View>
        </View>

        {/* Waste Type Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>WASTE TYPE/CLEAN UP</Text>
          
          <View style={styles.wasteTypesGrid}>
            {wasteTypes.map((type) => (
              <TouchableOpacity
                key={type.id}
                style={[
                  styles.wasteTypeCard,
                  selectedWasteTypes.includes(type.id) && styles.wasteTypeCardSelected
                ]}
                onPress={() => toggleWasteType(type.id)}
              >
                <View style={styles.wasteTypeContent}>
                  <View style={styles.checkbox}>
                    {selectedWasteTypes.includes(type.id) && (
                      <View style={[styles.checkmark, { backgroundColor: type.color }]} />
                    )}
                  </View>
                  <Text style={[
                    styles.wasteTypeLabel,
                    selectedWasteTypes.includes(type.id) && styles.wasteTypeLabelSelected
                  ]}>
                    {type.label}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Selected Types Summary */}
        {selectedWasteTypes.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Selected Types</Text>
            <View style={styles.selectedTypesContainer}>
              {selectedWasteTypes.map((typeId) => {
                const type = wasteTypes.find(t => t.id === typeId);
                return (
                  <View key={typeId} style={[styles.selectedTypeChip, { backgroundColor: type?.color }]}>
                    <Text style={styles.selectedTypeText}>{type?.label}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        )}

        {/* Time Information */}
        <View style={styles.infoCard}>
          <Clock size={20} color="#4CAF50" />
          <Text style={styles.infoText}>
            Pickup will be scheduled within 24 hours of your request
          </Text>
        </View>

        {/* Schedule Button */}
        <TouchableOpacity 
          style={[styles.scheduleButton, isSubmitting && styles.scheduleButtonDisabled]}
          onPress={handleSchedulePickup}
          disabled={isSubmitting}
        >
          <Text style={styles.scheduleButtonText}>
            {isSubmitting ? 'Scheduling...' : 'Request Pickup'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  dateText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  wasteTypesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  wasteTypeCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  wasteTypeCardSelected: {
    borderColor: '#4CAF50',
    backgroundColor: '#f8fff8',
  },
  wasteTypeContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#ddd',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    width: 12,
    height: 12,
    borderRadius: 2,
  },
  wasteTypeLabel: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  wasteTypeLabelSelected: {
    color: '#333',
    fontWeight: '600',
  },
  selectedTypesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selectedTypeChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  selectedTypeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  infoCard: {
    backgroundColor: '#E8F5E8',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  infoText: {
    marginLeft: 12,
    fontSize: 14,
    color: '#4CAF50',
    flex: 1,
    fontWeight: '500',
  },
  scheduleButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 40,
  },
  scheduleButtonDisabled: {
    opacity: 0.6,
  },
  scheduleButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});