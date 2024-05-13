import { LoaderCircle } from 'lucide-react';
import './Loader.scss';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-icon">
        <LoaderCircle size={50} />
      </div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default LoadingScreen;
