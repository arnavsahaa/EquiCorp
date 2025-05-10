
import { useState, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, File, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Input } from '@/components/ui/input';

interface VideoUploadProps {
  onVideoUpload?: (file: File) => void;
}

export function VideoUpload({ onVideoUpload }: VideoUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (!file) return;
    
    // Check if the file is a video
    if (!file.type.startsWith('video/')) {
      toast({
        title: "Invalid file type",
        description: "Please select a video file.",
        variant: "destructive",
      });
      return;
    }
    
    // Check file size (limit to 100MB)
    if (file.size > 100 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select a video file under 100MB.",
        variant: "destructive",
      });
      return;
    }
    
    // Create preview URL
    const fileUrl = URL.createObjectURL(file);
    setSelectedFile(file);
    setPreviewUrl(fileUrl);
  };
  
  const handleUpload = async () => {
    if (!selectedFile) return;
    
    setIsUploading(true);
    
    try {
      // Here you would normally upload the file to a server
      // For now we'll simulate an upload with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Upload successful",
        description: `${selectedFile.name} has been uploaded.`,
      });
      
      // Call the callback if provided
      if (onVideoUpload) {
        onVideoUpload(selectedFile);
      }
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your video.",
        variant: "destructive",
      });
      console.error("Error uploading video:", error);
    } finally {
      setIsUploading(false);
    }
  };
  
  const clearSelection = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="space-y-4">
        <div className="flex flex-col items-center justify-center gap-4">
          {!selectedFile ? (
            <div className="w-full">
              <label 
                htmlFor="video-upload" 
                className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-background hover:bg-muted/50 border-muted-foreground/20"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">MP4, WebM, MOV (MAX 100MB)</p>
                </div>
                <Input 
                  id="video-upload" 
                  type="file" 
                  accept="video/*"
                  className="hidden"
                  onChange={handleFileChange} 
                />
              </label>
            </div>
          ) : (
            <div className="w-full space-y-4">
              <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden">
                <video 
                  src={previewUrl || undefined}
                  controls
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
                <button 
                  onClick={clearSelection}
                  className="absolute top-2 right-2 p-1 bg-background/80 rounded-full hover:bg-background text-foreground"
                  title="Remove"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <File className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground truncate flex-1">
                  {selectedFile.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </span>
              </div>
              
              <Button 
                onClick={handleUpload} 
                className="w-full"
                disabled={isUploading}
              >
                {isUploading ? "Uploading..." : "Upload Video"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
