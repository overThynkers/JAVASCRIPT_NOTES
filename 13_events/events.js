//! ==========================================================
//! EVENTS IN JAVASCRIPT 
//! ==========================================================
// ? An event in JavaScript is an action or occurrence (such as a click, key press, or page load) that JavaScript can detect and respond to.

//* ==========================================================
//* MOUSE EVENTS 
//* ==========================================================
//? onclick: The user clicks on an element.
//? oncontextmenu: The user right-clicks on an element.
//? ondblclick: The user double-clicks on an element.
//? onmousedown: A mouse button is pressed over an element.
//? onmouseenter: The pointer is moved onto an element.
//? onmouseleave: The pointer is moving over an element.
//? onmousemove: The pointer is moving over an element.
//? onmouseout: The mouse pointer moves out of an element.
//? onmouseover: The mouse button is releasrd over an element.
//? onmouseup: The mouse button is released over an element.
document.getElementById("eventBtn1").addEventListener("click", () => {
    alert("Hello");
});
document.getElementById("eventBtn2").addEventListener("mouseenter", () => {
    alert("Hello");
});


//* ==========================================================
//* KEYBOARD EVENTS
//* ==========================================================
//? onkeydown: A key is pressed down.
//? onkeypress: A key is pressed (deprecated, use onkeydown).
//? onkeyup: A key is released.

//* ==========================================================
//* FORM EVENTS
//* ==========================================================
//? onblur: An element loses focus.
//? onchange: The value of an element has been changed.
//? onfocus: An element gets focus.
//? oninput: The value of an input element is changed.
//? oninvalid: An input element is invalid.
//? onreset: A form is reset.
//? onsearch: The user writes something in a search field.
//? onselect: The user selects text in an input element.
//? onsubmit: A form is submitted.

//* ==========================================================
//* WINDOW / DOCUMENT EVENTS
//* ==========================================================
//? onload: The page has fully loaded.
//? onunload: The page is unloading (e.g., closing tab).
//? onbeforeunload: The page is about to be unloaded.
//? onresize: The browser window is resized.
//? onscroll: The document or element is scrolled.
//? onerror: An error occurs while loading a file.
//? onhashchange: The URL hash (#) has changed.
//? onpopstate: The window's history changes.
//? onpagehide: The page is being hidden.
//? onpageshow: The page is being shown.
//? onmessage: A message is received (e.g., from Web Workers or iframes).

//* ==========================================================
//* CLIPBOARD EVENTS
//* ==========================================================
//? oncopy: The user copies content.
//? oncut: The user cuts content.
//? onpaste: The user pastes content.

//* ==========================================================
//* DRAG EVENTS
//* ==========================================================
//? ondrag: An element is being dragged.
//? ondragend: Dragging of an element has ended.
//? ondragenter: A dragged element enters a drop target.
//? ondragleave: A dragged element leaves a drop target.
//? ondragover: A dragged element is over a drop target.
//? ondragstart: The user starts dragging an element.
//? ondrop: A dragged element is dropped on a target.

//* ==========================================================
//* TOUCH EVENTS
//* ==========================================================
//? ontouchstart: A finger touches the screen.
//? ontouchend: A finger is removed from the screen.
//? ontouchmove: A finger is dragged across the screen.
//? ontouchcancel: A touch event is interrupted.

//* ==========================================================
//* MEDIA EVENTS
//* ==========================================================
//? onabort: Media loading is aborted.
//? oncanplay: Enough data is available to play media.
//? oncanplaythrough: Media can be played to the end without stopping.
//? ondurationchange: The duration of the media changes.
//? onended: Media playback has finished.
//? onloadeddata: Media data has been loaded.
//? onloadedmetadata: Metadata (dimensions, duration) is loaded.
//? onpause: Media playback is paused.
//? onplay: Media playback starts.
//? onplaying: Media is playing after being paused or stopped for buffering.
//? onprogress: The browser is downloading media data.
//? onratechange: The playback rate changes.
//? onseeked: Seeking has ended.
//? onseeking: The user starts seeking.
//? onstalled: The browser is trying to get media data, but data is not available.
//? onsuspend: Media data loading is stopped.
//? ontimeupdate: The playback position has changed.
//? onvolumechange: The volume changes.
//? onwaiting: Media has paused for buffering.

//* ==========================================================
//* ANIMATION EVENTS
//* ==========================================================
//? onanimationstart: A CSS animation starts.
//? onanimationend: A CSS animation ends.
//? onanimationiteration: A CSS animation repeats.

//* ==========================================================
//* TRANSITION EVENTS
//* ==========================================================
//? ontransitionstart: A CSS transition starts.
//? ontransitionend: A CSS transition ends.
//? ontransitionrun: A CSS transition runs.
//? ontransitioncancel: A CSS transition is cancelled.

//* ==========================================================
//* PRINT EVENTS
//* ==========================================================
//? onafterprint: A page has started printing or print preview is closed.
//? onbeforeprint: A page is about to be printed.

//* ==========================================================
//* MISCELLANEOUS EVENTS
//* ==========================================================
//? onwheel: The mouse wheel rolls up or down over an element.
//? ontoggle: The user opens or closes a <details> element.
//? onstorage: A Web Storage area (localStorage/sessionStorage) is updated.
//? ononline: The browser starts to work online.
//? onoffline: The browser starts to work offline.
//? onfocusin: An element is about to get focus (bubbles).
//? onfocusout: An element is about to lose focus (bubbles).
//? onpointercancel: A pointer event is cancelled.
//? onpointerdown: A pointer becomes active (mouse/pen/touch pressed).
//? onpointerenter: A pointer moves into an element's hit test boundaries.
//? onpointerleave: A pointer moves out of an element's hit test boundaries.
//? onpointermove: A pointer changes coordinates.
//? onpointerout: A pointer moves out of an element (bubbles).
//? onpointerover: A pointer moves into an element (bubbles).
//? onpointerup: A pointer becomes inactive.
//? onfullscreenchange: An element enters/exits fullscreen mode.
//? onfullscreenerror: Fullscreen mode request fails.
//? oncontextmenu: The user right-clicks on an element (also listed in Mouse).



// ! INTERVIEW QUESTION TOPIC - EVENTS IN JAVASCRIPT

// * What is an event in JavaScript?
// ? An event is an action or occurrence in the browser such as click, key press, scroll, load, etc.
// ? JavaScript detects these events and allows us to run code in response.

// * What is event handling in JavaScript?
// ? Event handling is the process of writing code that runs when a specific event occurs,
// ? like clicking a button or submitting a form.

// * What is the difference between onclick and addEventListener?
// ? onclick can assign only one handler and can be overwritten.
// ? addEventListener can add multiple handlers and provides more control and flexibility.

// * What are mouse events?
// ? Mouse events are triggered by mouse actions like clicking, hovering, moving, or releasing.
// ? Examples: click, dblclick, mouseover, mouseout, mousemove, mousedown, mouseup.

// * What are keyboard events?
// ? Keyboard events occur when a user interacts with the keyboard.
// ? Examples: keydown, keyup, keypress (deprecated).

// * What are form events?
// ? Form events are triggered when users interact with form elements.
// ? Examples: submit, reset, input, change, focus, blur, invalid.

// * What is event bubbling?
// ? Event bubbling is a process where an event starts from the target element
// ? and moves upward to its parent elements in the DOM tree.

// * What is event capturing?
// ? Event capturing is the opposite of bubbling where the event starts from the parent
// ? and moves down to the target element.

// * Difference between event bubbling and capturing?
// ? Bubbling: child → parent (default behavior)
// ? Capturing: parent → child

// * What does event.preventDefault() do?
// ? It prevents the default browser behavior like form submission or link navigation.

// * What does event.stopPropagation() do?
// ? It stops the event from bubbling up to parent elements.

// * What is event delegation?
// ? Event delegation is a technique where a parent element handles events for its child elements
// ? using event bubbling instead of adding listeners to each child individually.

// * Why is event delegation useful?
// ? It improves performance, reduces memory usage, and works for dynamically added elements.

// * Difference between onchange and oninput?
// ? oninput triggers instantly when the value changes.
// ? onchange triggers after the input loses focus.

// * What is the event loop?
// ? The event loop is a mechanism in JavaScript that handles asynchronous tasks
// ? like callbacks, promises, and events in a non-blocking way.

// * What is debouncing?
// ? Debouncing ensures that a function runs only after the user stops triggering an event
// ? for a specific time (useful in search inputs).

// * What is throttling?
// ? Throttling ensures a function runs at fixed intervals
// ? even if the event keeps firing continuously (like scroll events).

// * What does 'this' refer to in event handlers?
// ? In event handlers, 'this' refers to the element that triggered the event.

// * Best practices for handling events?
// ? Always use addEventListener instead of inline events.
// ? Remove unused event listeners to avoid memory leaks.
// ? Use event delegation for dynamic elements.
// ? Optimize scroll and resize event performance.