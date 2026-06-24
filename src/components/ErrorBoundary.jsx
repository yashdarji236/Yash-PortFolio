import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  componentDidCatch(error, info) {
    console.error('Captured error:', error, info);
    this.setState({ error, info });
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40 }}>
          <div style={{ background: '#111', color: '#fff', padding: 24, borderRadius: 8 }}>
            <h2 style={{ marginTop: 0 }}>Application error — check console</h2>
            <pre style={{ whiteSpace: 'pre-wrap', fontSize: 13 }}>{String(this.state.error)}</pre>
            <details style={{ marginTop: 12, color: '#ddd' }}>
              <summary>More info</summary>
              <pre style={{ whiteSpace: 'pre-wrap' }}>{String(this.state.info?.componentStack)}</pre>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
