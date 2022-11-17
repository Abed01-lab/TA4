package com.example.mockito;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.mockito.ArgumentMatchers.argThat;

public class ProcessorTest {

    @Test
    public void VerifyThatAMockWasCalledWithSpecificArguments(){
        MyService myService = Mockito.mock(MyService.class);
        String processName = "dummy-process-name";
        Mockito.when(myService.DoSomething(processName)).thenReturn(10);
        MyProcessor myProcessor = new MyProcessor(processName,myService);
        myProcessor.Process();
        Mockito.verify(myService).DoSomething(Mockito.anyString());
    }

    @Test
    public void VerifyPropertyWithPredicate(){
        MyService myService = Mockito.mock(MyService.class);
        MyProcessor myProcessor = new MyProcessor(myService,new MyProperty(5));
        myProcessor.AddProperty();
        Mockito.verify(myService).AddProperty(argThat((MyProperty prop)->prop.getI()==5));


    }

}
