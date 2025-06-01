// src/components/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: undefined,
    errorInfo: undefined,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-900 dark:bg-bg-dark dark:text-text-light">
          <h2 className="mb-4 text-2xl font-semibold text-red-500">
            Error Loading Music Player
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {this.state.error?.message}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="text-primary-foreground mt-4 rounded-md bg-primary px-4 py-2 transition-colors hover:bg-primary/90"
          >
            Reload Player
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
