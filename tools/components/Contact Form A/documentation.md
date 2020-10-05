<!-- Only Modify The Commented Text and Capitalised Text-->
# Contact Form A 

```
<thetacomponent>
    <div class="p-5 bg-white rounded-lg m-2 w-1/3">
        <form action="https://formsubmit.co/your@email.com" method="POST" class="grid grid-cols-2 gap-4 text-left">
            <div>
                <p class="text-lg">Name</p>
                <input name="name" type="text" placeholder="John Doe" class="p-3 border-2 rounded-lg w-full">
            </div>
            <div>
                <p class="text-lg">Email</p>
                <input name="email" type="email" placeholder="john.doe@email.com" class="p-3 border-2 rounded-lg w-full">
            </div>
            <div class=" col-span-2">
                <p class="text-lg">Subject</p>
                <input name="subject" type="text" placeholder="Message from John Doe" class="p-3 border-2 rounded-lg w-full">
            </div>
            <div class="col-span-2">
                <p class="text-lg">Message</p>
                <input name="message" type="text" placeholder="John Doe likes cake" class="p-3 border-2 rounded-lg w-full">
            </div>
            <input type="hidden" name="_next" value="">
            <input type="text" name="_honey" style="display:none">
            <div class="col-span-2">
                <button type="submit" class="bg-red-300 p-3 rounded-lg px-10">Send</button>
            </div>
        </form>
    </div>
</thetacomponent>
```

## Description
A simple and clean Contact Form.

Modify the `<form>` attributes to use your backend
<!-- EXPLAIN ABOUT YOUR COMPONENT HERE -->