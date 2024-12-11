<template>
    <div class="newsletter-container">
        <div class="content">
            <h1>Don't miss amazing grocery deals</h1>
            <p>Sign up for the daily newsletter</p>
            <div class="form-group">
                <input type="email" placeholder="Your email address" aria-label="Email address">
                <button type="button">Subscribe</button>
            </div>
        </div>
        <div class="image-container" style="width: 46%; height: auto;">
            <img src="../assets/Category/FreshApple.png" alt="Fresh apples in a mesh bag">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
      * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .newsletter-container {
            background-color: #fdf6ec;
            padding: 40px;
            margin: 20px auto;
            height:540px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .content {
            max-width: 700px;
            margin-left:30px;
        }

        h1 {
            color: #1a2b49;
            font-size: 4.5rem;
            margin-bottom: 16px;
            line-height: 1.2;
        }

        p {
            color: #666;
            font-size: 30px;
            margin-bottom: 24px;
        }

        .form-group {
            display: flex;
            gap: 8px;
            max-width: 400px;
        }

        input[type="email"] {
            flex: 1;
            padding: 12px 16px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
            
        }

        button {
            background-color: #2ecc71;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.2s;
        }

        button:hover {
            background-color: #27ae60;
        }

        .image-container {
            position: relative;
            width: 300px;
            height: 300px;
        }

        .image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .content {
                margin-bottom: 24px;
            }

            .image-container {
                width: 200px;
                height: 200px;
            }
            .form-group > input{
                width:300px;
            }
            .form-group > input,
            .form-group > button{
                border-radius: 30px;
            }

            button {
                width: 100%;
            }
        
</style>