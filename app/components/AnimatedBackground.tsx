const AnimatedBackground = () => {
    return (
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.15]"
        style={{
          backgroundImage: `url('/images/food-background.png')`,
          backgroundSize: '500px auto',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
        }}
      />
    );
  };
  
  export default AnimatedBackground;
  
  