build-lists: true
footer: IDM 231: Scripting for IDM I
slidenumbers: true
autoscale: true
theme: Dark Mode

# IDM 231

## Web Storage

^ Modern browsers offer web storage that can be processed by JavaScript on the browser. Web storage can be used to store approximately 5mb of data. When you use web storage, you can use either _local storage_ or _session storage_. The difference is that items in local storage persist between browser sessions, but items in session storage are removed when the browser session ends.

---

## Local vs Session Storage

- `setItem`
- `getItem`
- `removeItem`
- `clear`

^ To work with local and session storage, which store items in name/value pairs, you use teh `setItem`, `getItem`, `removeItem` and `clear` methods.

---

```javascript
localStorage.setItem('email', 'grace@gmail.com');
const email = localStorage.getItem('email');

localStorage.email = 'grace@gmail.com';
const email = localStorage.email;
```

---

```javascript
sessionStorage.setItem('itemname', 'value');
const itemName = sessionStorage.getItem('itemname');

sessionStorage.removeItem('itemname');
sessionStorage.clear();
```

---

## Devtools
