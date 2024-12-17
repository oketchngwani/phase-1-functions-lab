// Function to calculate the number of blocks from headquarters (42nd Street)
function distanceFromHqInBlocks(pickupLocation) {
    const headquarters = 42;
    return Math.abs(pickupLocation - headquarters);
  }

  
  // Function to calculate the distance in feet from headquarters
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  // Function to calculate the distance travelled in feet between two locations
  function distanceTravelledInFeet(startBlock, destinationBlock) {
    const blocksTravelled = Math.abs(destinationBlock - startBlock);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
  }
  
  function calculatesFarePrice(startBlock, destinationBlock) {
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(destinationBlock - startBlock) * feetPerBlock;
  
    if (distanceInFeet <= 400) {
      return 0; // First 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Flat fare of $25 for distances over 2000 feet and under 2500 feet
    } else {
      return 'cannot travel that far'; // Distance over 2500 feet
    }
  }
  
  // Example usage
  console.log(calculatesFarePrice(34, 58)); // Output: 13.12
  console.log(calculatesFarePrice(34, 32)); // Output: 25
  console.log(calculatesFarePrice(34, 28))
  
  // Example usage
  console.log(distanceFromHqInBlocks(43));
  console.log(distanceFromHqInBlocks(50));  
  console.log(distanceFromHqInBlocks(34));           
  console.log(distanceFromHqInFeet(43)); 
  console.log(distanceFromHqInFeet(34)); 
  console.log(distanceFromHqInFeet(50));            
  console.log(distanceTravelledInFeet(43, 48));       
  console.log(distanceTravelledInFeet(50, 60));  
  console.log(distanceTravelledInFeet(34, 28)); 