import React, { useState, useEffect } from 'react';
import api from '../../api'; 
import { Star, Trash2, Eye, EyeOff, Plus, Edit3, X } from 'lucide-react';

const AdminTripAdvisorManager = () => {
  const [reviews, setReviews] = useState([]);
  const [editingId, setEditingId] = useState(null); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialFormState = {
    authorName: '',
    authorLocation: '',
    rating: 5,
    reviewTitle: '',
    reviewText: '',
    reviewDate: '',
    isPublished: true
  };

  const [formData, setFormData] = useState(initialFormState);

  // Fetch All Reviews
  const fetchReviews = async () => {
    try {
      const res = await api.get('/reviews/admin/all');
      setReviews(res.data);
    } catch (err) {
      console.error("Fetch Reviews Error:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Submit New Review or Update Existing Review
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (editingId) {
        // Edit Mode Update
        await api.put(`/reviews/admin/${editingId}`, formData);
        alert("Review updated successfully!");
        setEditingId(null);
      } else {
        // New Review Add
        await api.post('/reviews/admin', formData);
        alert("Review added successfully!");
      }
      setFormData(initialFormState);
      fetchReviews();
    } catch (err) {
      console.error("Save Error:", err);
      alert("Failed to save review: " + (err.response?.data?.message || err.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Edit Button 
  const handleEditClick = (review) => {
    setEditingId(review._id);
    setFormData({
      authorName: review.authorName || '',
      authorLocation: review.authorLocation || '',
      rating: review.rating || 5,
      reviewTitle: review.reviewTitle || '',
      reviewText: review.reviewText || '',
      reviewDate: review.reviewDate || '',
      isPublished: review.isPublished ?? true
    });
  };

  // Edit Mode Cancel 
  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData(initialFormState);
  };

  // Toggle Visibility (Show/Hide)
  const togglePublish = async (id, currentStatus) => {
    try {
      await api.put(`/reviews/admin/${id}`, { isPublished: !currentStatus });
      fetchReviews();
    } catch (err) {
      console.error("Toggle Publish Error:", err);
    }
  };

  // Delete Review
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        await api.delete(`/reviews/admin/${id}`);
        fetchReviews();
      } catch (err) {
        console.error("Delete Error:", err);
      }
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8 text-white">
      <h1 className="text-2xl font-bold text-amber-400">TripAdvisor Reviews Manager</h1>

      {/* Add / Edit Review Form */}
      <form onSubmit={handleSubmit} className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            {editingId ? (
              <>
                <Edit3 className="w-5 h-5 text-amber-400" /> Edit Review
              </>
            ) : (
              <>
                <Plus className="w-5 h-5 text-emerald-400" /> Add New Review
              </>
            )}
          </h2>

          {editingId && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="flex items-center gap-1 text-xs px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded"
            >
              <X className="w-3.5 h-3.5" /> Cancel Edit
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Author Name (e.g. John Doe)"
            value={formData.authorName}
            onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
            required
            className="p-2.5 rounded bg-slate-800 border border-slate-700 text-sm focus:outline-none focus:border-amber-400"
          />
          <input
            type="text"
            placeholder="Location (e.g. London, UK)"
            value={formData.authorLocation}
            onChange={(e) => setFormData({ ...formData, authorLocation: e.target.value })}
            className="p-2.5 rounded bg-slate-800 border border-slate-700 text-sm focus:outline-none focus:border-amber-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Review Title"
            value={formData.reviewTitle}
            onChange={(e) => setFormData({ ...formData, reviewTitle: e.target.value })}
            required
            className="p-2.5 rounded bg-slate-800 border border-slate-700 text-sm focus:outline-none focus:border-amber-400"
          />
          <div className="flex gap-4 items-center">
            <select
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
              className="p-2.5 rounded bg-slate-800 border border-slate-700 text-sm flex-1 focus:outline-none focus:border-amber-400"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} Stars
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Date (e.g. Aug 2026)"
              value={formData.reviewDate}
              onChange={(e) => setFormData({ ...formData, reviewDate: e.target.value })}
              className="p-2.5 rounded bg-slate-800 border border-slate-700 text-sm flex-1 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        <textarea
          placeholder="Review Content / Text"
          value={formData.reviewText}
          onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
          required
          rows="3"
          className="w-full p-2.5 rounded bg-slate-800 border border-slate-700 text-sm focus:outline-none focus:border-amber-400"
        />

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 font-bold rounded-lg transition-colors ${
              isSubmitting
                ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                : editingId
                ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
            }`}
          >
            {isSubmitting ? 'Saving...' : editingId ? 'Update Review' : 'Save Review'}
          </button>
        </div>
      </form>

      {/* Reviews Table / List */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-800 text-slate-400 uppercase text-xs">
            <tr>
              <th className="p-4">Author</th>
              <th className="p-4">Title</th>
              <th className="p-4">Rating</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {reviews.map((rev) => (
              <tr key={rev._id} className={editingId === rev._id ? 'bg-slate-800/50' : ''}>
                <td className="p-4 font-medium text-white">
                  {rev.authorName} <br />
                  <span className="text-xs text-slate-500">{rev.authorLocation}</span>
                </td>
                <td className="p-4">{rev.reviewTitle}</td>
                <td className="p-4 flex items-center gap-1 text-amber-400">
                  {rev.rating} <Star className="w-3.5 h-3.5 fill-amber-400" />
                </td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      rev.isPublished
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-rose-500/20 text-rose-400'
                    }`}
                  >
                    {rev.isPublished ? 'Published' : 'Hidden'}
                  </span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <button
                    onClick={() => handleEditClick(rev)}
                    className="p-2 bg-slate-800 hover:bg-slate-700 rounded text-amber-400"
                    title="Edit Review"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => togglePublish(rev._id, rev.isPublished)}
                    className="p-2 bg-slate-800 hover:bg-slate-700 rounded"
                    title={rev.isPublished ? 'Hide Review' : 'Show Review'}
                  >
                    {rev.isPublished ? (
                      <EyeOff className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Eye className="w-4 h-4 text-emerald-400" />
                    )}
                  </button>
                  <button
                    onClick={() => handleDelete(rev._id)}
                    className="p-2 bg-slate-800 hover:bg-slate-700 rounded text-rose-400"
                    title="Delete Review"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTripAdvisorManager;