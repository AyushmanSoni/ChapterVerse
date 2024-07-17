# Chapterverse
## Challenges and Solutions

During the development of this project, I encountered several key challenges that provided valuable learning opportunities. Here’s a brief overview:

### 1. Managing Asynchronous Operations-

**Challenge**: Ensuring the database connection is established before the server starts handling requests.

**Solution**: Implemented `async/await` to handle the asynchronous nature of `mongoose.connect()`, ensuring a stable connection before server startup.

### 2. Environment Configuration

**Challenge**: Correctly configuring and using environment variables.

**Solution**: Utilized the `dotenv` package to load environment variables from a `.env` file, ensuring essential variables like the database URI and port number were properly configured.

### 3. Error Handling

**Challenge**: Implementing robust error handling for database connections and server startup.

**Solution**: Added `try-catch` blocks around asynchronous operations to log meaningful error messages and potentially recover from errors.

### 4. Code Modularity

**Challenge**: Designing the application with modular and reusable components.

**Solution**: Exported the database connection function from a separate module, promoting a modular design and better separation of concerns.

By addressing these challenges, I was able to enhance the reliability, maintainability, and overall quality of the application.

### Issue: "User is not a constructor"

I encountered an issue where the error message "User is not a constructor" appeared. This occurred while trying to create a new instance of the `User` model in my Express.js route.

#### Cause:
The error was due to an incorrect import of the `User` model in my route file.

#### Solution:
1. **Check the User Model Definition:**
   Ensure that the `user.js` model file is properly defined and exported. Specifically, I resolved the issue by defining the model and exporting it correctly:
   ```javascript
   const user = mongoose.model('User', userSchema);
   module.exports = user;

# Challenges Faced in Developing ChapterVerse

## Issues with Models
1. **Model Not Defined Correctly:**
   - Encountered `MissingSchemaError: Schema hasn't been registered for model "books".`
   - Solution: Ensured all models were defined and exported correctly in `models/` directory.

2. **Incorrect References in Models:**
   - References to other models were incorrect (e.g., using `ref: "books"` instead of `ref: "Book"`).
   - Solution: Corrected the references to match the model names.

## Issues with APIs
1. **TypeError: Book is not a constructor:**
   - Occurred due to incorrect import or usage of the `Book` model.
   - Solution: Verified the import statement and ensured the model was correctly instantiated.

2. **Routes Not Working:**
   - `Cannot POST /api/v1/update-book`
   - Solution: Corrected the route definition from `router.put("update-book",...)` to `router.put("/update-book",...)`.

3. **Spelling Mistakes in Methods:**
   - `findByIdAndUpadate` should be `findByIdAndUpdate`.
   - Solution: Fixed spelling errors in mongoose method names.

4. **Sorting Issues:**
   - Incorrect sort field `createdAT`.
   - Solution: Corrected to `createdAt`.

## General Tips
- **Consistent Naming:** Ensure model names and references are consistent.
- **Error Handling:** Implement robust error handling to debug issues effectively.
- **Documentation:** Keep API documentation updated to reflect correct endpoints and usage.