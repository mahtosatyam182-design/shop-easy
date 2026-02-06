import './Skeleton.css';

function Skeleton({ count = 1, height = '200px', width = '100%', borderRadius = '12px' }) {
  return (
    <>
      {Array(count).fill(0).map((_, index) => (
        <div 
          key={index} 
          className="skeleton"
          style={{ 
            height, 
            width, 
            borderRadius,
            animationDelay: `${index * 0.1}s`
          }}
        />
      ))}
    </>
  );
}

export function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <Skeleton height="200px" borderRadius="16px 16px 0 0" />
      <div className="skeleton-content">
        <Skeleton height="16px" width="80px" borderRadius="20px" />
        <Skeleton height="20px" width="70%" borderRadius="4px" />
        <Skeleton height="16px" width="90%" borderRadius="4px" />
        <div className="skeleton-footer">
          <Skeleton height="24px" width="80px" borderRadius="4px" />
          <Skeleton height="36px" width="100px" borderRadius="25px" />
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
