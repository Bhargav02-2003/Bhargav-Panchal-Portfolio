import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';
import { TestimonialItem } from '../types';
import { MessageSquareQuote, Star, Edit3, Plus, Check, X } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(TESTIMONIALS_DATA);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState<TestimonialItem>({
    id: '',
    name: '',
    role: '',
    company: '',
    avatarText: '',
    content: '',
    rating: 5,
    relation: '',
  });

  const handleOpenEdit = (item?: TestimonialItem) => {
    if (item) {
      setEditingItem(item);
    } else {
      setEditingItem({
        id: `t_${Date.now()}`,
        name: '',
        role: 'Tech Lead / Colleague',
        company: 'Enterprise Team',
        avatarText: 'TL',
        content: '',
        rating: 5,
        relation: 'Collaborated on production systems',
      });
    }
    setIsEditing(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem.name || !editingItem.content) return;

    const initials = editingItem.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'EX';

    const updated = { ...editingItem, avatarText: initials };

    const exists = testimonials.some((t) => t.id === updated.id);
    if (exists) {
      setTestimonials(testimonials.map((t) => (t.id === updated.id ? updated : t)));
    } else {
      setTestimonials([updated, ...testimonials]);
    }

    setIsEditing(false);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#070a10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
              <MessageSquareQuote className="w-3.5 h-3.5 text-purple-400" />
              <span>Peer Endorsements</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              What People Say
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              Feedback from engineering managers, product leads, and senior architects on production reliability and collaboration.
            </p>
          </div>

          <button
            onClick={() => handleOpenEdit()}
            className="self-start md:self-auto px-4 py-2 rounded-xl text-xs font-semibold bg-[#111927] hover:bg-[#182338] text-purple-300 border border-purple-500/30 flex items-center gap-2 transition-all hover:border-purple-500/50"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add / Edit Endorsement</span>
          </button>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between relative group border border-white/10"
            >
              <div>
                {/* Top stars & edit trigger */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <button
                    onClick={() => handleOpenEdit(t)}
                    title="Edit endorsement"
                    className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-opacity"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-md">
                  {t.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role} • {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit/Add Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-card rounded-2xl max-w-lg w-full p-6 sm:p-8 relative border border-purple-500/40 shadow-2xl">
            <button
              onClick={() => setIsEditing(false)}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white mb-2">Edit Endorsement</h3>
            <p className="text-xs text-slate-400 mb-6">Customize or replace with a real colleague or manager recommendation.</p>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  value={editingItem.name}
                  onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                  placeholder="e.g. Suresh Verma"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0a0f1d] border border-white/10 text-white text-sm focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">Role / Designation</label>
                  <input
                    type="text"
                    required
                    value={editingItem.role}
                    onChange={(e) => setEditingItem({ ...editingItem, role: e.target.value })}
                    placeholder="e.g. Engineering Lead"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0a0f1d] border border-white/10 text-white text-sm focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">Company</label>
                  <input
                    type="text"
                    required
                    value={editingItem.company}
                    onChange={(e) => setEditingItem({ ...editingItem, company: e.target.value })}
                    placeholder="e.g. Fintech Group"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0a0f1d] border border-white/10 text-white text-sm focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">Testimonial Content</label>
                <textarea
                  required
                  rows={4}
                  value={editingItem.content}
                  onChange={(e) => setEditingItem({ ...editingItem, content: e.target.value })}
                  placeholder="Write the recommendation here..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0a0f1d] border border-white/10 text-white text-sm focus:border-purple-500 focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl gradient-btn text-white text-xs font-semibold shadow-lg"
                >
                  Save Endorsement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
