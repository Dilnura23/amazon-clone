import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
},
{
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}
];

export function getDeliveryOption(deliveryOptionId){
  let deliveryOption;

  deliveryOptions.forEach((option)=>{
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });
return deliveryOption || deliveryOptions[0];
}

function isWeekend(date){
  const daysOfWeek = date.format('dddd');
  return daysOfWeek === 'Saturday' || daysOfWeek == 'Sunday';
}

export function calculateDeliveryDate(deliveryOption){

    let remainingDays = deliveryOption.deliveryDays
    let deliverDate = dayjs();
    
    while(remainingDays>0){
      deliverDate = deliverDate.add(1, 'days');
       if(!isWeekend(deliverDate)){
        remainingDays--;
       }
    }
    const dateString = deliverDate.format('dddd, MMMM D');
    return dateString;
  
}

export function calculateDeliveryDateForTrack(deliveryOption){

  let remainingDays = deliveryOption.deliveryDays
  let deliverDate = dayjs();
  
  while(remainingDays>0){
    deliverDate = deliverDate.add(1, 'days');
     if(!isWeekend(deliverDate)){
      remainingDays--;
     }
  }
  
  return deliverDate;

}