describe ('first test',()=>{

    let data:any;
    let a:number;
    let b:number;
    let str:string;

    beforeEach(()=>{
        console.log('from before');
        data={};
    });
    xit('x test',()=>{});
    it('fail test',()=>{
        fail();
    });
    it('it should add(10,10)and give 20',()=>{
    //var a=20;
    a=10;
    b=10;
    expect(a+b).toBe(20);
});
it('dummy test',()=>{
    pending();
});
//it('',()=>{});
it('it should return true if flag is true',()=>
{
    data.flag=false;
    data.flag=true;
    expect(data.flag).toBe(true);
});
});