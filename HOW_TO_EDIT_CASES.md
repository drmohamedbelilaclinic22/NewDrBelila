# How to Edit the Cases Section

This guide will help you edit the photos and texts in the cases section of the website.

## 📁 Step 1: Adding Your Images

### Where to Put Images
1. Copy your images to the `public` folder in the project
   - The `public` folder is located at: `project/public/`
   - Images in the `public` folder can be accessed directly in the website

### How to Name Your Images
The website expects images with specific names. For each case, you need **TWO images**:
- **Before image**: Shows the "before" state
- **After image**: Shows the "after" state

**Naming Convention:**
- Case 1: `case-1-before.jpg` and `case-1-after.jpg`
- Case 2: `case-2-before.jpg` and `case-2-after.jpg`
- Case 3: `case-3-before.jpg` and `case-3-after.jpg`
- Case 4: `case-4-before.jpg` and `case-4-after.jpg`
- Case 5: `case-5-before.jpg` and `case-5-after.jpg`
- Case 6: `case-6-before.jpg` and `case-6-after.jpg`

**Important Notes:**
- You can use `.jpg`, `.jpeg`, or `.png` formats
- Make sure the file names match exactly (including the dashes and numbers)
- If your images have different names, you can either:
  - Rename your images to match the expected names, OR
  - Update the code (see Step 3 below)

### Example:
If you have images named `my-before-photo.jpg` and `my-after-photo.jpg`:
1. Copy them to the `public` folder
2. Rename them to `case-1-before.jpg` and `case-1-after.jpg` (for case 1)

---

## ✏️ Step 2: Editing the Text Content

The text content (titles and descriptions) is stored in a separate file for easy editing.

### File Location
Open: `src/contexts/LanguageContext.tsx`

### How to Edit

1. **For English Text:**
   - Find the `en:` section (around line 12)
   - Look for the case descriptions starting around line 42
   - Edit the text after `'case.1.title':` and `'case.1.description':`

2. **For Arabic Text:**
   - Find the `ar:` section (around line 72)
   - Look for the case descriptions starting around line 102
   - Edit the text after `'case.1.title':` and `'case.1.description':`

### Example:
```typescript
// English version
'case.1.title': 'Your New Title Here',
'case.1.description': 'Your new description here. You can use multiple lines\nby adding \n for line breaks.',

// Arabic version
'case.1.title': 'عنوانك الجديد هنا',
'case.1.description': 'وصفك الجديد هنا. يمكنك استخدام أسطر متعددة\nبإضافة \n لفصل الأسطر.',
```

**Important:**
- Keep the quotes (`'`) around the text
- Use `\n` to create a new line in the description
- Make sure there's a comma (`,`) at the end of each line (except the last one)

---

## 🔧 Step 3: Changing Image Names in Code (Optional)

If your images have different names, you can update the code to match your image names.

### File Location
Open: `src/components/SmileGallery.tsx`

### How to Edit
1. Find the `cases` array (around line 166)
2. Update the `before:` and `after:` paths to match your image names

### Example:
If your images are named `my-case-1-before.png` and `my-case-1-after.png`:
```typescript
{
  before: '/my-case-1-before.png',
  after: '/my-case-1-after.png',
  id: 1
}
```

**Important:**
- Always start the path with `/` (this tells the website to look in the `public` folder)
- Use the exact file name including the extension (`.jpg`, `.png`, etc.)

---

## ➕ Step 4: Adding or Removing Cases

### To Add a New Case:

1. **Add the images:**
   - Add `case-7-before.jpg` and `case-7-after.jpg` to the `public` folder

2. **Update the code in `SmileGallery.tsx`:**
   - Add a new object to the `cases` array:
   ```typescript
   {
     before: '/case-7-before.jpg',
     after: '/case-7-after.jpg',
     id: 7
   }
   ```

3. **Add text in `LanguageContext.tsx`:**
   - Add English text:
   ```typescript
   'case.7.title': 'Your Title',
   'case.7.description': 'Your Description',
   ```
   - Add Arabic text:
   ```typescript
   'case.7.title': 'عنوانك',
   'case.7.description': 'وصفك',
   ```

### To Remove a Case:

1. Remove the case object from the `cases` array in `SmileGallery.tsx`
2. (Optional) Remove the text entries from `LanguageContext.tsx` (the website will still work without them)

---

## 🚀 Step 5: Viewing Your Changes

After making changes:

1. **If the development server is running:**
   - The changes should appear automatically (hot reload)
   - If not, refresh your browser

2. **If the development server is not running:**
   - Open a terminal in the project folder
   - Run: `npm run dev`
   - Open the website in your browser (usually `http://localhost:5173`)

---

## 📝 Quick Reference

| What to Edit | File Location | What to Change |
|-------------|---------------|----------------|
| Images | `public/` folder | Add/rename image files |
| Image Paths | `src/components/SmileGallery.tsx` | Update `before:` and `after:` paths |
| English Text | `src/contexts/LanguageContext.tsx` | Edit `en:` section, `case.X.title` and `case.X.description` |
| Arabic Text | `src/contexts/LanguageContext.tsx` | Edit `ar:` section, `case.X.title` and `case.X.description` |

---

## ❓ Troubleshooting

**Images not showing?**
- Check that images are in the `public` folder (not `src` folder)
- Check that image names match exactly (case-sensitive)
- Check that paths start with `/` in the code
- Make sure image file extensions match (`.jpg` vs `.jpeg` vs `.png`)

**Text not updating?**
- Make sure you saved the file
- Check for syntax errors (missing commas, quotes, etc.)
- Refresh your browser
- Check the browser console for errors (F12)

**Need help?**
- Make sure all quotes are properly closed
- Check that commas are in the right places
- Verify the case numbers match (e.g., `case.1` in both code and text)

---

## 💡 Tips

1. **Image Quality:** Use high-quality images for best results (recommended: 1200px width or larger)
2. **File Size:** Compress large images to improve website loading speed
3. **Consistency:** Keep image dimensions similar for a better visual experience
4. **Backup:** Always keep a backup of your original images before making changes

