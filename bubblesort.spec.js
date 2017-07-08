

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('Output array length is same as input length', function(){
  	expect(bubbleSort([0,1,2]).length).toEqual(3);
  });

  it('Output array  is sorted correctly', function(){
  	expect(bubbleSort([8,1,2,3,7,4,5,6])).toEqual([1, 2, 3, 4, 5, 6, 7, 8 ]);
  });


	// spyOn(bubbleSort, swap )


  // it('calls swap a given amount of times', function(){

  // // 	expect
  // // })  
})