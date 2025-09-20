import { router } from 'expo-router';
import {
  ArrowLeft,
  Send,
  Star,
  ThumbsDown,
  ThumbsUp
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function FeedbackScreen() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState('general');

  const feedbackTypes = [
    { id: 'general', title: 'General Feedback', color: '#9C27B0' },
    { id: 'bug', title: 'Report Bug', color: '#FF6B6B' },
    { id: 'feature', title: 'Feature Request', color: '#4ECDC4' },
    { id: 'praise', title: 'Praise', color: '#4CAF50' },
  ];

  const handleSubmitFeedback = () => {
    if (rating === 0) {
      Alert.alert('Rating Required', 'Please provide a rating before submitting.');
      return;
    }
    if (feedback.trim() === '') {
      Alert.alert('Feedback Required', 'Please provide your feedback before submitting.');
      return;
    }

    // Here you would typically send the feedback to your backend
    Alert.alert(
      'Thank You!', 
      'Your feedback has been submitted successfully. We appreciate your input!',
      [{ text: 'OK', onPress: () => router.back() }]
    );
  };

  const renderStars = () => {
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => setRating(star)}
            style={styles.starButton}
          >
            <Star
              size={32}
              color={star <= rating ? '#FFD700' : '#DDD'}
              fill={star <= rating ? '#FFD700' : 'transparent'}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      
      {/* Header Text */}
      <View style={styles.headerSection}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Feedback</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Feedback Type Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What type of feedback?</Text>
          <View style={styles.typeGrid}>
            {feedbackTypes.map((type) => (
              <TouchableOpacity
                key={type.id}
                style={[
                  styles.typeCard,
                  { backgroundColor: type.color },
                  feedbackType === type.id && styles.typeCardSelected
                ]}
                onPress={() => setFeedbackType(type.id)}
              >
                <Text style={styles.typeText}>{type.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Rating Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How would you rate your experience?</Text>
          {renderStars()}
          <Text style={styles.ratingText}>
            {rating === 0 ? 'Tap to rate' :
             rating === 1 ? 'Poor' :
             rating === 2 ? 'Fair' :
             rating === 3 ? 'Good' :
             rating === 4 ? 'Very Good' : 'Excellent'}
          </Text>
        </View>

        {/* Feedback Input */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tell us more</Text>
          <TextInput
            style={styles.feedbackInput}
            placeholder="Share your thoughts, suggestions, or report issues..."
            multiline
            numberOfLines={6}
            value={feedback}
            onChangeText={setFeedback}
            textAlignVertical="top"
          />
        </View>

        {/* Quick Feedback Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Feedback</Text>
          <View style={styles.quickFeedbackContainer}>
            <TouchableOpacity 
              style={[styles.quickFeedbackButton, styles.positiveButton]}
              onPress={() => setFeedback(feedback + (feedback ? ' ' : '') + 'Great app! Keep up the good work.')}
            >
              <ThumbsUp size={20} color="white" />
              <Text style={styles.quickFeedbackText}>Love it!</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.quickFeedbackButton, styles.negativeButton]}
              onPress={() => setFeedback(feedback + (feedback ? ' ' : '') + 'There are some issues that need improvement.')}
            >
              <ThumbsDown size={20} color="white" />
              <Text style={styles.quickFeedbackText}>Needs work</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity 
          style={[styles.submitButton, (rating === 0 || feedback.trim() === '') && styles.submitButtonDisabled]}
          onPress={handleSubmitFeedback}
          disabled={rating === 0 || feedback.trim() === ''}
        >
          <Send size={20} color="white" />
          <Text style={styles.submitButtonText}>Submit Feedback</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 44,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
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
    height: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  typeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  typeCard: {
    flex: 1,
    minWidth: '45%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  typeCardSelected: {
    borderWidth: 3,
    borderColor: '#333',
  },
  typeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  starButton: {
    padding: 4,
    marginHorizontal: 4,
  },
  ratingText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginTop: 8,
  },
  feedbackInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ddd',
    minHeight: 120,
  },
  quickFeedbackContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  quickFeedbackButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  positiveButton: {
    backgroundColor: '#4CAF50',
  },
  negativeButton: {
    backgroundColor: '#FF6B6B',
  },
  quickFeedbackText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: '#9C27B0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 12,
    marginVertical: 20,
    gap: 8,
  },
  submitButtonDisabled: {
    backgroundColor: '#ccc',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});