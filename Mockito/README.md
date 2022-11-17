# Test Assignment 4

### Mockito Powerups
**1. How do you verify that a mock was called?**


List<String> mockedList = mock(MyList.class); 
mockedList.size(); 
verify(mockList, atLeastOnce()).size();

The atLeastOnce() option allows us to check if a mock was called at least once

**2. How do you verify that a mock was NOT called?**

List<String> mockedList = mock(MyList.class); 
mockedList.size(); 
verify(mockedList, never()).clear();


Here we use the “never” option to verify that the mock has never been called.

**3. How do you specify how many times a mock should have been called?**

List<String> mockedList = mock(MyList.class); 
mockedList.clear(); 
mockedList.clear(); 
mockedList.clear(); 

verify(mockedList, atLeast(1)).clear(); 
verify(mockedList, atMost(10)).clear();

You can use atLeast(x) with any number to test if the mock has been called at least X number of times. Then you can also use atMost to check for any interval of numbers.


**4. How do you verify that a mock was called with specific arguments?**

[Code Example (VerifyThatAMockWasCalledWithSpecificArguments)](https://github.com/Worldjones2/TestAssignment4/blob/main/Mockito/src/test/java/com/example/mockito/ProcessorTest.java)

We use verify method and calls on the method to check the methods specific arguments to verify the return of the method.


**5. How do you use a predicate to verify the properties of the arguments given to a call to the mock?**

[Code Example (VerifyPropertyWithPredicate)](https://github.com/Worldjones2/TestAssignment4/blob/main/Mockito/src/test/java/com/example/mockito/ProcessorTest.java)

We use the argThat method to initialize the predicate which verify the properties of the arguments in the mock.
