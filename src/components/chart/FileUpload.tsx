"use client";

import { useCallback, useState } from "react";
import { Upload, FileText, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface FileUploadProps {
  onFileLoaded: (content: string, fileName: string) => void;
}

export function FileUpload({ onFileLoaded }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = useCallback(
    (file: File) => {
      setError(null);

      if (!file.name.endsWith(".csv") && !file.name.endsWith(".json")) {
        setError("Please upload a CSV or JSON file");
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        setError("File size must be under 10MB");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        onFileLoaded(content, file.name);
      };
      reader.onerror = () => {
        setError("Failed to read file");
      };
      reader.readAsText(file);
    },
    [onFileLoaded]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  return (
    <div className="w-full">
      <motion.label
        htmlFor="file-upload"
        className={`
          flex flex-col items-center justify-center w-full h-48 
          border-2 border-dashed cursor-pointer transition-all duration-200
          ${
            isDragging
              ? "border-amber-400 bg-amber-400/10"
              : "border-zinc-700 hover:border-zinc-600 hover:bg-zinc-900/50"
          }
        `}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload
            className={`w-10 h-10 mb-3 ${isDragging ? "text-amber-400" : "text-zinc-500"}`}
          />
          <p className="mb-2 text-sm text-zinc-400">
            <span className="font-semibold text-white">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-zinc-500">CSV or JSON (max 10MB)</p>
        </div>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept=".csv,.json"
          onChange={handleInputChange}
        />
      </motion.label>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mt-4 p-3 bg-red-950/50 border border-red-900 text-red-400"
        >
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span className="text-sm">{error}</span>
        </motion.div>
      )}
    </div>
  );
}
