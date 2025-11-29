/**
 * Purchases API Client
 *
 * Handles purchase requests, quotes, and transaction management.
 * Mock implementation - swap fetch functions for real HTTP.
 */

// Mock purchase history
const MOCK_PURCHASES = [];

/**
 * Submit a purchase request / quote request
 * @param {Object} request
 * @param {string} request.creditId - Credit being purchased
 * @param {string} request.buyerId - User ID
 * @param {number} request.quantity - Amount requested (can be partial)
 * @param {string} request.message - Optional message to seller
 * @returns {Promise<Object>} Purchase request confirmation
 */
export async function submitPurchaseRequest(request) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const purchaseRequest = {
    id: `req_${Date.now()}`,
    creditId: request.creditId,
    buyerId: request.buyerId,
    quantity: request.quantity,
    message: request.message || '',
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  // In real impl: POST /api/purchases/request
  // return await axios.post('/api/purchases/request', request);

  return {
    success: true,
    purchaseRequest,
    message: 'Quote request submitted successfully. The seller will contact you within 1-2 business days.',
  };
}

/**
 * Get purchase history for a user
 * @param {string} userId - User ID
 * @returns {Promise<Purchase[]>}
 */
export async function getPurchaseHistory(userId) {
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Filter purchases for this user
  const userPurchases = MOCK_PURCHASES.filter((p) => p.buyerId === userId);

  // In real impl: GET /api/purchases?userId={userId}
  // return await axios.get(`/api/purchases?userId=${userId}`);

  return userPurchases;
}

/**
 * Get a single purchase by ID
 * @param {string} purchaseId
 * @returns {Promise<Purchase|null>}
 */
export async function getPurchaseById(purchaseId) {
  await new Promise((resolve) => setTimeout(resolve, 200));

  const purchase = MOCK_PURCHASES.find((p) => p.id === purchaseId);

  // In real impl: GET /api/purchases/{purchaseId}
  // return await axios.get(`/api/purchases/${purchaseId}`);

  return purchase || null;
}

/**
 * Cancel a pending purchase request
 * @param {string} purchaseId
 * @returns {Promise<Object>}
 */
export async function cancelPurchase(purchaseId) {
  await new Promise((resolve) => setTimeout(resolve, 400));

  // In real impl: DELETE /api/purchases/{purchaseId}
  // return await axios.delete(`/api/purchases/${purchaseId}`);

  return {
    success: true,
    message: 'Purchase request cancelled.',
  };
}
