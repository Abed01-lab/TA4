package com.example.mockito;

import java.sql.RowId;
import java.util.function.Predicate;

public class MyProcessor {
    private  MyProperty property;
    private String processName;
    private MyService myService;

    public MyProcessor(String processName,MyService myService){
        this.processName=processName;
        this.myService=myService;
    }
    public MyProcessor(MyService myService,MyProperty property){
        this.myService =myService;
        this.property = property;
    }


    public void Process(){
        int rI = processName!=null ?myService.DoSomething(processName):-1;
        System.out.println("My Integer is: "
        +rI);
    }
    public void AddProperty(){
        property.setI(5);
        int number = property != null ?myService.AddProperty(property):-1;
        System.out.println("My Integer is: "
                +number);
    }




}
