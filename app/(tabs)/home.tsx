import { useAuth } from '@/contexts/AuthContext';
import { router } from 'expo-router';
import {
  Bell,
  Camera,
  MapPin,
  MessageSquare,
  Truck,
  User
} from 'lucide-react-native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default function HomeScreen() {
  const { user } = useAuth();


  const quickActions = [
    {
      id: 'report',
      title: 'Report Waste',
      icon: Camera,
      color: '#FF6B6B',
      route: '/report-waste'
    },
    {
      id: 'pickup',
      title: 'Request Pickup',
      icon: Truck,
      color: '#4ECDC4',
      route: '/pickup-schedule'
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      color: '#45B7D1',
      route: '/notifications'
    },
    {
      id: 'feedback',
      title: 'Feedback',
      icon: MessageSquare,
      color: '#9C27B0',
      route: '/feedback'
    },
  ];

  return (
    <View style={[styles.container, styles.containerWithPadding]}>
    
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi, {user?.name?.split(' ')[0] || 'User'}</Text>
          <Text style={styles.subGreeting}>Let&apos;s keep Ghana clean today!</Text>
        </View>
        <TouchableOpacity 
          style={styles.profileButton}
          onPress={() => router.push('/profile')}
        >
          <User size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            <View style={styles.quickActionsRow}>
              {quickActions.slice(0, 2).map((action) => {
                const cardStyle = action.color === '#FF6B6B' ? styles.quickActionCardReport :
                                action.color === '#4ECDC4' ? styles.quickActionCardPickup :
                                action.color === '#45B7D1' ? styles.quickActionCardNotifications :
                                styles.quickActionCardFeedback;
                return (
                  <TouchableOpacity
                    key={action.id}
                    style={[styles.quickActionCard, cardStyle]}
                    onPress={() => router.push(action.route as any)}
                  >
                    <action.icon size={32} color="white" />
                    <Text style={styles.quickActionText}>{action.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={styles.quickActionsRow}>
              {quickActions.slice(2, 4).map((action) => {
                const cardStyle = action.color === '#FF6B6B' ? styles.quickActionCardReport :
                                action.color === '#4ECDC4' ? styles.quickActionCardPickup :
                                action.color === '#45B7D1' ? styles.quickActionCardNotifications :
                                styles.quickActionCardFeedback;
                return (
                  <TouchableOpacity
                    key={action.id}
                    style={[styles.quickActionCard, cardStyle]}
                    onPress={() => router.push(action.route as any)}
                  >
                    <action.icon size={32} color="white" />
                    <Text style={styles.quickActionText}>{action.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>

        {/* Auto-Detect Location */}
        <TouchableOpacity style={styles.locationCard}>
          <View style={styles.locationContent}>
            <MapPin size={20} color="#4CAF50" />
            <Text style={styles.locationText}>Auto-Detect Location</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  containerWithPadding: {
    paddingTop: 44,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white',
  },
  greeting: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
  },
  subGreeting: {
    fontSize: 17,
    color: '#666',
    marginTop: 2,
  },
  profileButton: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 72,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  quickActionsGrid: {
    flexDirection: 'column',
    gap: 12,
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionCard: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  quickActionCardReport: {
    backgroundColor: '#FF6B6B',
  },
  quickActionCardPickup: {
    backgroundColor: '#4ECDC4',
  },
  quickActionCardNotifications: {
    backgroundColor: '#45B7D1',
  },
  quickActionCardFeedback: {
    backgroundColor: '#9C27B0',
  },
  quickActionText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
  locationCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  locationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  navigationGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  navCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  navIconContainer: {
    marginBottom: 8,
  },
  navIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIconHome: {
    backgroundColor: '#E8F5E8',
  },
  navIconTracker: {
    backgroundColor: '#FFF3E0',
  },
  navIconDashboard: {
    backgroundColor: '#E3F2FD',
  },
  navIconText: {
    fontSize: 24,
  },
  navTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
});