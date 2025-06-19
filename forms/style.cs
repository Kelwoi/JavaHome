body {
  font-family: Arial, sans-serif;
  margin: 20px;
  background-color: #f4f4f4;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

#buttons {
  margin-bottom: 20px;
}

button {
  margin-right: 10px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
}

#product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.card {
  width: 150px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.1);
  padding: 10px;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.03);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 8px;
}
