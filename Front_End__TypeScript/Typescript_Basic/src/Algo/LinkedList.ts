import { NewLineKind } from "typescript";

interface INodeLL 
{
     data:any;
     pointer: INodeLL|null;
}

class NodeLL implements INodeLL 
{
     data: any;
     pointer: INodeLL | null;
     constructor(data:any)
     {
          this.data = data;
          this.pointer = null;
     }
}

class LinkedListData
{
     private head:INodeLL|null;
     private tail:INodeLL|null;


     constructor(head?:INodeLL|null, tail?:INodeLL|null)
     {
          this.head = head ?? null;
          this.tail = tail ?? null;
     }

     // xay dung cac phuong thuc gan giong nhu array.
     get getHead():INodeLL | null
     {
          if(this.head == null)
          {
               return null;
          }
          return this.head;
     }

     // getTail trả về phần tử cuối cùng của chuỗi liên kết
     get getTail():any
     {
          // Kiểm tra danh sách,
          // nếu DS trống thì thiết lập head và tail là node mới
          if(this.head ==null)
          {
               return null;
          }
          //nếu DS đã đã có dữ liệu thì tìm phần tử có (pointer) == null thì đó là phần tử cuối cùng 
          this.tail = this.head; // gấn ptủ cuối là phần tủ hiện tại.
          while(this.tail?.pointer != null) //kiểm tra this.tail có phải là phần tủ cuối cùng ?
          {
               this.tail = this.tail.pointer; // vì "pointer != null" nên nhảy đến phần tử tiếp theo, cho đến hết DS
          }
          return this.tail;
     }

     // insertHead(newDAta:any)
     // {

     // }
     push(data:any){
          const newNode = new NodeLL(data); //tao mot node moi
          if(this.head == null)
          {
               this.head = newNode;
               return;
          }
          else
          {
               const tail = this.getTail(); //lấy phần tử cuối trong DS
               tail.pointer = newNode; //
          }
          return this.head; //rả về danh sách liên kết đã được cập nhật.
     }
}
