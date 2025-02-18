import { Button } from '@ui';
import { Component, ErrorInfo } from 'react';

interface State {
  hasError: boolean;
}

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {}

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          {this.props.fallback}
          <div>
            <Button
              label="Refresh"
              onClick={() => this.setState({ hasError: false })}
            />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
