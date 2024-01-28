// JavaScript for post.html
function toggleEdit() {
    // Toggle edit mode for post title and text
    const postTitle = document.getElementById('postTitle');
    const postText = document.getElementById('postText');
    const editButton = document.getElementById('editButton');

    if (postTitle.contentEditable === 'false') {
        // Enable edit mode
        postTitle.contentEditable = 'true';
        postText.contentEditable = 'true';
        editButton.innerText = 'Save';
    } else {
        // Disable edit mode
        postTitle.contentEditable = 'false';
        postText.contentEditable = 'false';
        editButton.innerText = 'Edit';
    }
}

function toggleLike() {
    // Toggle like status and update like count
    const likeButton = document.getElementById('likeButton');
    const likeCount = document.getElementById('likeCount');

    if (likeButton.classList.contains('liked')) {
        // Unlike
        likeButton.classList.remove('liked');
        likeButton.innerText = 'Like';
        likeCount.innerText = 'Be the first one to like this!';
    } else {
        // Like
        likeButton.classList.add('liked');
        likeButton.innerText = 'Liked!';
        likeCount.innerText = '1 person likes this!';
    }
}

function addComment() {
    // Add a new comment to the comment section
    const commentInput = document.getElementById('commentInput');
    const allComments = document.getElementById('allComments');

    if (commentInput.value.trim() !== '') {
        // Create a new comment item
        const commentItem = document.createElement('div');
        commentItem.classList.add('commentItem');
        commentItem.innerText = commentInput.value;

        // Add the comment item to the comment section
        allComments.insertBefore(commentItem, allComments.firstChild);

        // Clear the comment input
        commentInput.value = '';
    }
}
