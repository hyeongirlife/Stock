import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { MessageSquare, ThumbsUp, MoreVertical, Trash2 } from 'lucide-react';

interface Comment {
  id: string;
  content: string;
  likes: number;
  created_at: string;
  user: {
    email: string;
  };
}

interface StockCommunityProps {
  stockCode: string;
  market: 'domestic' | 'overseas';
}

export default function StockCommunity({ stockCode, market }: StockCommunityProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchComments = async () => {
      const { data: stock } = await supabase
        .from('stocks')
        .select('id')
        .eq('code', stockCode)
        .single();

      if (stock) {
        const { data } = await supabase
          .from('comments')
          .select(`
            *,
            user:user_id (
              email
            )
          `)
          .eq('stock_id', stock.id)
          .order('created_at', { ascending: false });

        setComments(data || []);
      }
    };

    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    fetchComments();
  }, [stockCode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('로그인이 필요합니다.');
      return;
    }

    const { data: stock } = await supabase
      .from('stocks')
      .select('id')
      .eq('code', stockCode)
      .single();

    if (stock) {
      const { data: comment, error } = await supabase
        .from('comments')
        .insert({
          stock_id: stock.id,
          user_id: user.id,
          content: newComment,
        })
        .select(`
          *,
          user:user_id (
            email
          )
        `)
        .single();

      if (!error && comment) {
        setComments([comment, ...comments]);
        setNewComment('');
      }
    }
  };

  const handleDelete = async (commentId: string) => {
    const { error } = await supabase
      .from('comments')
      .delete()
      .eq('id', commentId);

    if (!error) {
      setComments(comments.filter(c => c.id !== commentId));
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">종목 토론</h2>
        <div className="flex items-center space-x-2 text-gray-500">
          <MessageSquare className="w-5 h-5" />
          <span>{comments.length}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder={user ? "종목 토론에 참여해보세요." : "로그인 후 참여할 수 있습니다."}
          className="w-full p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          disabled={!user}
        />
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            disabled={!user || !newComment.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            작성하기
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 border border-gray-100 rounded-xl">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="font-medium">{comment.user.email}</span>
                <span className="text-sm text-gray-500 ml-2">
                  {new Date(comment.created_at).toLocaleDateString()}
                </span>
              </div>
              {user && user.id === comment.user_id && (
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
            <p className="text-gray-800">{comment.content}</p>
            <div className="flex items-center space-x-4 mt-3">
              <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
                <ThumbsUp className="w-4 h-4" />
                <span>{comment.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}