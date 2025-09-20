import {
  CheckCircle,
  Truck
} from 'lucide-react-native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default function TrackerScreen() {
  const activeOrders = [
    {
      id: '1',
      type: 'Organic Waste Collection',
      location: 'Trinity Avenue',
      status: 'In Progress',
      time: '10:30 AM',
      progress: 75,
    },
    {
      id: '2',
      type: 'Plastic Waste Collection',
      location: 'Kwame Nkrumah Avenue',
      status: 'Pickup Scheduled',
      time: '2:00 PM',
      progress: 25,
    },
  ];

  const completedOrders = [
    {
      id: '3',
      type: 'General Cleaning',
      completedAt: 'Yesterday, 3:45 PM',
    },
  ];

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TRACKER</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Status Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Status</Text>
          
          {/* Active Orders */}
          <Text style={styles.subsectionTitle}>Active Orders</Text>
          {activeOrders.map((order) => (
            <View key={order.id} style={styles.orderCard}>
              <View style={styles.orderHeader}>
                <View style={styles.orderInfo}>
                  <Text style={styles.orderType}>{order.type}</Text>
                  <Text style={styles.orderLocation}>{order.location}</Text>
                </View>
                <Text style={[
                  styles.orderStatus,
                  order.status === 'In Progress' ? styles.inProgress : styles.scheduled
                ]}>
                  {order.status}
                </Text>
              </View>
              <Text style={styles.orderTime}>{order.time}</Text>
              
              {/* Progress Bar */}
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, order.progress === 75 ? styles.progressFill75 : styles.progressFill25]} />
                </View>
                <Text style={styles.progressText}>{order.progress}%</Text>
              </View>
            </View>
          ))}

          {/* Completed Orders */}
          <Text style={styles.subsectionTitle}>Completed Orders</Text>
          {completedOrders.map((order) => (
            <View key={order.id} style={styles.completedOrderCard}>
              <View style={styles.completedOrderContent}>
                <CheckCircle size={20} color="#4CAF50" />
                <View style={styles.completedOrderText}>
                  <Text style={styles.completedOrderType}>{order.type}</Text>
                  <Text style={styles.completedOrderTime}>{order.completedAt}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Progress Bar Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROGRESS BAR</Text>
          <View style={styles.progressCard}>
            <View style={styles.progressItem}>
              <Text style={styles.progressLabel}>NON-EMPTY HISTORY</Text>
              <View style={styles.progressIndicator}>
                <View style={styles.progressDot} />
                <Text style={styles.progressValue}>PROGRESS BAR</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Arrival Info */}
        <View style={styles.arrivalCard}>
          <Truck size={32} color="#4CAF50" />
          <Text style={styles.arrivalText}>ARRIVING IN 5 MINUTES</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 45,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
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
  subsectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 12,
    marginTop: 16,
  },
  orderCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  orderInfo: {
    flex: 1,
  },
  orderLocation: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
    fontStyle: 'italic',
  },
  orderStatus: {
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  inProgress: {
    backgroundColor: '#E8F5E8',
    color: '#4CAF50',
  },
  scheduled: {
    backgroundColor: '#FFF3E0',
    color: '#FF9800',
  },
  orderTime: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 3,
    marginRight: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 3,
  },
  progressFill75: {
    width: '75%',
  },
  progressFill25: {
    width: '25%',
  },
  progressText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4CAF50',
  },
  completedOrderCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  completedOrderContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  completedOrderText: {
    marginLeft: 12,
    flex: 1,
  },
  completedOrderType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  completedOrderTime: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  progressCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  progressItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
  progressIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginRight: 8,
  },
  progressValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4CAF50',
  },
  arrivalCard: {
    backgroundColor: '#E8F5E8',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  arrivalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  navItem: {
    alignItems: 'center',
  },
  activeNavItem: {
    opacity: 1,
  },
  navLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  activeNavLabel: {
    color: '#4CAF50',
    fontWeight: '600',
  },
});