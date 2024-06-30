// More content

var moreContent = document.getElementById("more-content");
moreContent.addEventListener("shown.bs.collapse", function() {
  this.scrollIntoView();
});

// Profile

var counter = 0;
var hoverImages = [
  "assets/profile/dounai.jpg",
  "assets/profile/suannai.jpg",
  "assets/profile/niunai.jpg",
];

var profile_credit = document.getElementById("profile-credit");
var profile = document.getElementById("profile");

function profile_enter() {
  profile.src = hoverImages[counter];
  counter = (counter + 1) % 3;
}

function profile_leave() {
  profile.src = "assets/profile/xiaoge.jpg";
}

profile_credit.addEventListener("mouseenter", profile_enter);
profile_credit.addEventListener("mouseleave", profile_leave);
// profile_leave();

var profileCredit = document.getElementById("profile-credit");
var profile = document.getElementById("profile");

// // 当鼠标移动到 profile-credit 上时触发
// profile_credit.addEventListener("mouseover", function() {
//   // 检查事件的 target 是否是 profile-credit，以避免子元素触发事件
//   if (event.target.id === 'profile-credit') {
//     profile.src = hoverImages[counter];
//     counter = (counter + 1) % hoverImages.length;
//   }
// });

// // 当鼠标离开 profile-credit 时触发
// profile_redit.addEventListener("mouseout", function() {
//   // 可以设置一个延迟，以防止鼠标快速移动时频繁触发
//   setTimeout(function() {
//     if (profile.src !== "assets/profile/xiaoge.jpg") {
//       profile.src = "assets/profile/xiaoge.jpg";
//     }
//   }, 50); // 延迟时间可以根据需要调整
// });


// Footer year

var d = new Date();
document.getElementById('year').innerHTML = d.getFullYear();

// Clipboard

var snippets = document.querySelectorAll('.snippet');

[].forEach.call(snippets, function(snippet) {
  snippet.firstChild.insertAdjacentHTML(
    'beforebegin',
    '<button class="btn" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-clipboard-snippet><i class="bi bi-clipboard"></i></button>');
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var clipboardSnippets = new ClipboardJS('[data-clipboard-snippet]', {
  target: function(trigger) {
    return trigger.nextElementSibling;
  }
});

clipboardSnippets.on('success', function(e) {
  e.clearSelection();
  var icon = e.trigger.querySelector('i');
  icon.className = 'bi bi-check2';
  var tooltip = bootstrap.Tooltip.getInstance(e.trigger);
  tooltip.setContent({'.tooltip-inner': 'Copied!'});
  tooltip.show();
  setTimeout(function() {
    icon.className = 'bi bi-clipboard';
    tooltip.setContent({'.tooltip-inner': 'Copy to clipboard'});
    tooltip.hide();
  }, 2000);
});


// External links

document.addEventListener("DOMContentLoaded", function() {
  // Select all anchor tags with an href attribute
  const links = document.querySelectorAll('a[href]');

  // Iterate through each link
  links.forEach(function(link) {
    // Check if the href attribute does not start with '#'
    if (!link.getAttribute('href').startsWith('#')) {
        // Set the target and rel attributes
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
