import { useEffect, useRef } from 'react';

const useDocumentTitle = (title: string, defaultTitle?: string) => {
  const previousTitle = useRef(document.title); // Store the original title

  useEffect(() => {
    document.title = title; // Set the new title

    return () => {
      // Clean up: Restore the original title or a specified default title
      document.title = defaultTitle || previousTitle.current;
    };
  }, [title, defaultTitle]); // Re-run effect if title or defaultTitle changes
};

export default useDocumentTitle;