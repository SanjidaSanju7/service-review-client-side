import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100 bg-purple-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-purple-600">Blog</h2>
                    <div className="divide-y divide-gray-700">
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5">What is the Difference between SQL and NoSQL</h3>
                            <p className="md:pl-0 md:col-span-7 text-justify">
                                SQL databases are relational, NoSQL databases are non-relational.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                                SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                                SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5">What is JWT, and how does it work?</h3>
                            <p className="md:pl-0 md:col-span-7 text-justify">JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.<br />
                                JWT's differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.Once decoded, you will get two JSON strings:The header and the payload.The signature.
                                The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                                There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.
                                The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. </p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5">What is the difference between Javascript and NodeJS?</h3>
                            <p className="md:pl-0 md:col-span-7 text-justify">1.JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. 2.JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. 3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported. 4.A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.5.The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.</p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5">How does NodeJS handle multiple requests at the same time?</h3>
                            <p className="md:pl-0 md:col-span-7 text-justify">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;