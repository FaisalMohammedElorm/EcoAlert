import { StatusBar } from 'expo-status-bar';
import { 
  TrendingUp, 
  Recycle, 
  Award,
  Calendar
} from 'lucide-react-native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

export default function DashboardScreen() {
  const { width } = useWindowDimensions();
  const stats = [
    { label: 'Total Orders', value: '12', color: '#4CAF50' },
    { label: 'Completed', value: '8', color: '#2196F3' },
    { label: 'Ongoing', value: '3', color: '#FF9800' },
    { label: 'Cancelled', value: '1', color: '#F44336' },
  ];

  const activities = [
    {
      id: '1',
      title: 'Total Waste Reported',
      value: '24',
      unit: 'reports',
      icon: Recycle,
      color: '#4CAF50',
    },
    {
      id: '2',
      title: 'Waste Reports Verified',
      value: '18',
      unit: 'verified',
      icon: Award,
      color: '#2196F3',
    },
  ];

  const monthlyData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 45 },
    { month: 'Mar', value: 85 },
    { month: 'Apr', value: 75 },
    { month: 'May', value: 95 },
    { month: 'Jun', value: 55 },
    { month: 'Jul', value: 80 },
    { month: 'Aug', value: 90 },
  ];

  const maxValue = Math.max(...monthlyData.map(item => item.value));

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <View style={styles.dateSelector}>
          <Calendar size={16} color="#666" />
          <Text style={styles.dateText}>August 2024</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {stats.map((stat) => (
            <View key={stat.label} style={styles.statCard}>
              <Text style={[styles.statValue, stat.color === '#4CAF50' ? styles.statValueGreen : stat.color === '#2196F3' ? styles.statValueBlue : stat.color === '#FF9800' ? styles.statValueOrange : styles.statValueRed]}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Chart Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Monthly Activity</Text>
          <View style={styles.chartCard}>
            <View style={styles.chartContainer}>
              {monthlyData.map((item) => (
                <View key={item.month} style={styles.chartBar}>
                  <View 
                    style={[
                      styles.bar, 
                      item.value === 65 ? styles.barHeight65 :
                      item.value === 45 ? styles.barHeight45 :
                      item.value === 85 ? styles.barHeight85 :
                      item.value === 75 ? styles.barHeight75 :
                      item.value === 95 ? styles.barHeight95 :
                      item.value === 55 ? styles.barHeight55 :
                      item.value === 80 ? styles.barHeight80 :
                      styles.barHeight90
                    ]} 
                  />
                  <Text style={styles.chartLabel}>{item.month}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Activities Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ACTIVITIES</Text>
          {activities.map((activity) => (
            <View key={activity.id} style={styles.activityCard}>
              <View style={[styles.activityIcon, activity.color === '#4CAF50' ? styles.activityIconGreen : styles.activityIconBlue]}>
                <activity.icon size={24} color={activity.color} />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityValue}>
                  {activity.value} {activity.unit}
                </Text>
              </View>
              <TrendingUp size={20} color="#4CAF50" />
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <View style={styles.quickActionCard}>
            <Text style={styles.quickActionTitle}>Report New Waste</Text>
            <Text style={styles.quickActionSubtitle}>Help keep your community clean</Text>
          </View>
          
          <View style={styles.quickActionCard}>
            <Text style={styles.quickActionTitle}>Request Pickup</Text>
            <Text style={styles.quickActionSubtitle}>Schedule waste collection</Text>
          </View>
        </View>

        {/* Bottom Navigation Indicator */}
        <View style={styles.bottomIndicator}>
          <View style={styles.navDot} />
          <View style={styles.navDot} />
          <View style={[styles.navDot, styles.activeNavDot]} />
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
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  dateSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  dateText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  statCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
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
  chartCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 140,
  },
  chartBar: {
    alignItems: 'center',
    flex: 1,
  },
  bar: {
    width: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    marginBottom: 8,
  },
  chartLabel: {
    fontSize: 10,
    color: '#666',
    fontWeight: '500',
  },
  activityCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activityIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  activityValue: {
    fontSize: 14,
    color: '#666',
  },
  quickActionCard: {
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
  quickActionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  quickActionSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  bottomIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  navDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
    marginHorizontal: 4,
  },
  activeNavDot: {
    backgroundColor: '#4CAF50',
  },
  statValueGreen: {
    color: '#4CAF50',
  },
  statValueBlue: {
    color: '#2196F3',
  },
  statValueOrange: {
    color: '#FF9800',
  },
  statValueRed: {
    color: '#F44336',
  },
  barHeight65: {
    height: 65,
  },
  barHeight45: {
    height: 45,
  },
  barHeight85: {
    height: 85,
  },
  barHeight75: {
    height: 75,
  },
  barHeight95: {
    height: 95,
  },
  barHeight55: {
    height: 55,
  },
  barHeight80: {
    height: 80,
  },
  barHeight90: {
    height: 90,
  },
  activityIconGreen: {
    backgroundColor: '#E8F5E8',
  },
  activityIconBlue: {
    backgroundColor: '#E3F2FD',
  },
});