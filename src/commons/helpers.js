export const getLocation = () => {
    const { geolocation } = navigator;
    
    return new Promise((resolve, reject) => {
      if (!geolocation) {
        reject(console.log('Not Supported'));
      }
      
      geolocation.getCurrentPosition((position) => {
        resolve(position);
      }, () => {
        reject(console.log('Permission denied'));
      });
    });
};
  