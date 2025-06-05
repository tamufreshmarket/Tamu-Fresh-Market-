 export const Button = ({ children, className }) => (
  <button className={`px-4 py-2 rounded ${className}`}>{children}</button>
 );

 export const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg border ${className}`}>{children}</div>
 );
 
 export const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
 );
