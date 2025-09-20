import createContextHook from '@nkzw/create-context-hook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { WasteReport, PickupRequest, Order } from '@/types/waste';

export const [WasteProvider, useWaste] = createContextHook(() => {
  const [reports, setReports] = useState<WasteReport[]>([]);
  const [pickupRequests, setPickupRequests] = useState<PickupRequest[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadWasteData();
  }, []);

  const loadWasteData = async () => {
    try {
      const [reportsData, pickupsData, ordersData] = await Promise.all([
        AsyncStorage.getItem('waste_reports'),
        AsyncStorage.getItem('pickup_requests'),
        AsyncStorage.getItem('orders')
      ]);

      if (reportsData) setReports(JSON.parse(reportsData));
      if (pickupsData) setPickupRequests(JSON.parse(pickupsData));
      if (ordersData) setOrders(JSON.parse(ordersData));
    } catch (error) {
      console.error('Error loading waste data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addWasteReport = async (report: Omit<WasteReport, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newReport: WasteReport = {
      ...report,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const updatedReports = [...reports, newReport];
    setReports(updatedReports);
    await AsyncStorage.setItem('waste_reports', JSON.stringify(updatedReports));
    
    return newReport;
  };

  const addPickupRequest = async (request: Omit<PickupRequest, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newRequest: PickupRequest = {
      ...request,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const updatedRequests = [...pickupRequests, newRequest];
    setPickupRequests(updatedRequests);
    await AsyncStorage.setItem('pickup_requests', JSON.stringify(updatedRequests));
    
    return newRequest;
  };

  const addOrder = async (order: Omit<Order, 'id' | 'createdAt'>) => {
    const newOrder: Order = {
      ...order,
      id: Date.now().toString(),
      createdAt: new Date(),
    };

    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    await AsyncStorage.setItem('orders', JSON.stringify(updatedOrders));
    
    return newOrder;
  };

  const updateOrderStatus = async (orderId: string, status: Order['status'], progress?: number) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId 
        ? { 
            ...order, 
            status, 
            progress: progress !== undefined ? progress : order.progress,
            completedAt: status === 'completed' ? new Date() : order.completedAt
          }
        : order
    );
    
    setOrders(updatedOrders);
    await AsyncStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const getActiveOrders = () => orders.filter(order => order.status === 'active');
  const getCompletedOrders = () => orders.filter(order => order.status === 'completed');
  const getPendingReports = () => reports.filter(report => report.status === 'pending');

  return {
    reports,
    pickupRequests,
    orders,
    isLoading,
    addWasteReport,
    addPickupRequest,
    addOrder,
    updateOrderStatus,
    getActiveOrders,
    getCompletedOrders,
    getPendingReports,
  };
});