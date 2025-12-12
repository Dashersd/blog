'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BlogEditor() {
  const router = useRouter();
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [dateEnd, setDateEnd] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [existingSlugs, setExistingSlugs] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    // Get existing slugs from API
    fetch('/api/blog/posts')
      .then((res) => res.json())
      .then((data) => {
        if (data.slugs) {
          setExistingSlugs(data.slugs);
        }
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const loadPost = async (postSlug: string) => {
    setLoading(true);
    setMessage(null);
    try {
      const response = await fetch(`/api/blog/${postSlug}`);
      if (response.ok) {
        const data = await response.json();
        setSlug(data.slug);
        setTitle(data.title);
        setDate(data.date || new Date().toISOString().split('T')[0]);
        setDateEnd(data.dateEnd || '');
        setExcerpt(data.excerpt || '');
        setContent(data.content);
        setIsEditing(true);
        setMessage({ type: 'success', text: 'Post loaded successfully!' });
      } else {
        setMessage({ type: 'error', text: 'Failed to load post' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error loading post' });
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setMessage({ type: 'error', text: 'Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed.' });
      event.target.value = '';
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setMessage({ type: 'error', text: 'File size exceeds 5MB limit' });
      event.target.value = '';
      return;
    }

    // Store file and create preview
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    // Reset file input so the same file can be selected again
    event.target.value = '';
  };

  const handleConfirmUpload = async () => {
    if (!selectedFile) return;

    setUploadingImage(true);
    setMessage(null);
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await fetch('/api/blog/upload-image', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.url) {
        // Insert image markdown at cursor position
        const textarea = document.getElementById('content-editor') as HTMLTextAreaElement;
        const cursorPos = textarea.selectionStart;
        const textBefore = content.substring(0, cursorPos);
        const textAfter = content.substring(cursorPos);
        const imageMarkdown = `![${selectedFile.name}](${data.url})\n`;
        setContent(textBefore + imageMarkdown + textAfter);
        setMessage({ type: 'success', text: 'Image uploaded successfully!' });
        
        // Clear preview
        setSelectedFile(null);
        setPreviewUrl(null);
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to upload image' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error uploading image' });
    } finally {
      setUploadingImage(false);
    }
  };

  const handleCancelPreview = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setMessage(null);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  const handleSave = async () => {
    if (!slug || !title || !content) {
      setMessage({ type: 'error', text: 'Please fill in slug, title, and content' });
      return;
    }

    setSaving(true);
    setMessage(null);

    try {
      const response = await fetch('/api/blog/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug,
          title,
          date,
          dateEnd: dateEnd || undefined,
          excerpt,
          content,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Blog post saved successfully!' });
        setIsEditing(true);
        if (!existingSlugs.includes(slug)) {
          setExistingSlugs([...existingSlugs, slug]);
        }
        // Refresh the page after a short delay to show the new post
        setTimeout(() => {
          router.refresh();
        }, 1000);
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to save blog post' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error saving blog post' });
    } finally {
      setSaving(false);
    }
  };

  const handlePreview = () => {
    if (slug) {
      window.open(`/blog/${slug}`, '_blank');
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    if (!isEditing && !slug) {
      setSlug(generateSlug(newTitle));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Blog Editor
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Edit your blog posts in real-time and upload images to support your content
            </p>
          </div>

          {/* Message */}
          {message && (
            <div
              className={`mb-4 p-4 rounded-lg ${
                message.type === 'success'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Load Existing Post */}
          {existingSlugs.length > 0 && (
            <div className="mb-6 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Load Existing Post
              </label>
              <div className="flex gap-2">
                <select
                  onChange={(e) => {
                    if (e.target.value) loadPost(e.target.value);
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100"
                  defaultValue=""
                >
                  <option value="">Select a post to edit...</option>
                  {existingSlugs.map((postSlug) => (
                    <option key={postSlug} value={postSlug}>
                      {postSlug}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Slug (URL-friendly identifier) *
              </label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="my-ojt-journey"
              />
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="My OJT Journey at NCIP"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Start Date (YYYY-MM-DD)
              </label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="2025-11-24"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Format: YYYY-MM-DD (e.g., 2025-11-24) - You can type this manually
              </p>
            </div>

            {/* Date End (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                End Date (Optional - YYYY-MM-DD)
              </label>
              <input
                type="text"
                value={dateEnd}
                onChange={(e) => setDateEnd(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="2025-11-28"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Leave empty for single date. Format: YYYY-MM-DD (e.g., 2025-11-28) - For date ranges like &quot;November 24-28, 2025&quot;
              </p>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Excerpt (short description)
              </label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="A brief description of your blog post..."
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Upload Image
              </label>
              
              {!previewUrl ? (
                <>
                  <div className="flex items-center gap-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      disabled={loading || uploadingImage}
                      className="block w-full text-sm text-gray-500 dark:text-gray-400
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-accent-500 file:text-white
                        hover:file:bg-accent-600
                        file:cursor-pointer
                        disabled:opacity-50"
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Max 5MB (JPEG, PNG, GIF, WebP)
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Images will be inserted at your cursor position in the editor below
                  </p>
                </>
              ) : (
                <div className="mt-2 p-4 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-slate-700/50">
                  {/* Preview Box */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Image Thumbnail */}
                    <div className="flex-shrink-0">
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full sm:w-48 h-48 object-cover rounded-md border border-gray-300 dark:border-slate-600"
                      />
                    </div>
                    
                    {/* File Info and Actions */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
                          {selectedFile?.name}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {selectedFile && formatFileSize(selectedFile.size)}
                        </p>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        <button
                          onClick={handleConfirmUpload}
                          disabled={uploadingImage || loading}
                          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium flex items-center gap-2"
                        >
                          {uploadingImage ? (
                            <>
                              <span className="animate-spin">⏳</span>
                              Uploading...
                            </>
                          ) : (
                            <>
                              ✓ Confirm Upload
                            </>
                          )}
                        </button>
                        <button
                          onClick={handleCancelPreview}
                          disabled={uploadingImage || loading}
                          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                        >
                          ✕ Remove
                        </button>
                        <label className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 cursor-pointer transition-colors text-sm font-medium inline-block">
                          Change File
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileSelect}
                            disabled={uploadingImage || loading}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Content Editor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Content (Markdown) *
              </label>
              <textarea
                id="content-editor"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={20}
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 font-mono text-sm focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="# My Blog Post

Write your content here using Markdown syntax.

## Features
- Support for **bold** and *italic* text
- Lists and code blocks
- Images (upload above and they'll be inserted here)

![Image description](/blog-images/your-image.jpg)"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Use Markdown syntax. Images uploaded above will be automatically inserted.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-slate-700">
              <button
                onClick={handleSave}
                disabled={saving || loading || !slug || !title || !content}
                className="px-6 py-2 bg-accent-500 text-white rounded-md hover:bg-accent-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {saving ? 'Saving...' : 'Save Post'}
              </button>
              {slug && (
                <button
                  onClick={handlePreview}
                  className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  Preview
                </button>
              )}
              <button
                onClick={() => {
                  setSlug('');
                  setTitle('');
                  setDate(new Date().toISOString().split('T')[0]);
                  setDateEnd('');
                  setExcerpt('');
                  setContent('');
                  setIsEditing(false);
                  setMessage(null);
                }}
                className="px-6 py-2 bg-gray-300 dark:bg-slate-600 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-400 dark:hover:bg-slate-500 transition-colors"
              >
                New Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
