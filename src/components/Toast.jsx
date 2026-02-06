import { useEffect, useState } from 'react';
import './Toast.css';

function Toast({ message, type = 'success', onClose }) {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onClose]);
  
  const getIcon = () => {
    switch(type) {
      case 'success': return '✓';
      case 'error': return '✕';
      case 'warning': return '!';
      case 'info': return 'i';
      default: return '✓';
    }
  };
  
  return (
    <div className={`toast toast-${type} ${isVisible ? 'visible' : ''}`}>
      <span className="toast-icon">{getIcon()}</span>
      <span className="toast-message">{message}</span>
      <button className="toast-close" onClick={() => { setIsVisible(false); onClose(); }}>×</button>
    </div>
  );
}

export default Toast;
