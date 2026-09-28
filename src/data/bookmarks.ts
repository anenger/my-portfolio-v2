export interface Bookmark {
  title: string;
  url: string;
}

export interface BookmarkGroup {
  title: string;
  bookmarks: Bookmark[];
}

// Coding and software links only. Groups render in this order, each under its
// own small heading.
export const bookmarkGroups: BookmarkGroup[] = [
  {
    title: "Engineering",
    bookmarks: [
      {
        title: "A Complete Guide to useEffect",
        url: "https://overreacted.io/a-complete-guide-to-useeffect/",
      },
      {
        title: "Before You memo()",
        url: "https://overreacted.io/before-you-memo/",
      },
      {
        title: "React for Two Computers",
        url: "https://overreacted.io/react-for-two-computers/",
      },
      {
        title: "Making setInterval Declarative with React Hooks",
        url: "https://overreacted.io/making-setinterval-declarative-with-react-hooks/",
      },
      {
        title: "Why React Re-Renders",
        url: "https://www.joshwcomeau.com/react/why-react-re-renders/",
      },
      {
        title: "One Simple Trick to Optimize React Re-renders",
        url: "https://kentcdodds.com/blog/optimize-react-re-renders",
      },
      {
        title: "When to useMemo and useCallback",
        url: "https://kentcdodds.com/blog/usememo-and-usecallback",
      },
      {
        title: "useOptimistic Won't Save You",
        url: "https://www.columkelly.com/blog/use-optimistic",
      },
      {
        title: "Please Stop Using Barrel Files",
        url: "https://tkdodo.eu/blog/please-stop-using-barrel-files",
      },
      {
        title: "eslint-plugin-react-you-might-not-need-an-effect",
        url: "https://github.com/NickvanDyke/eslint-plugin-react-you-might-not-need-an-effect",
      },
      {
        title: "Default Exports in CommonJS Libraries",
        url: "https://blog.andrewbran.ch/default-exports-in-commonjs-libraries/",
      },
      {
        title: "Using Promises",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises",
      },
      {
        title: "Async JavaScript: From Callbacks, to Promises, to Async/Await",
        url: "https://ui.dev/async-javascript-from-callbacks-to-promises-to-async-await",
      },
      {
        title: "A Real World React → htmx Port",
        url: "https://htmx.org/essays/a-real-world-react-to-htmx-port/",
      },
      {
        title: "When Should You Use Hypermedia?",
        url: "https://htmx.org/essays/when-to-use-hypermedia/",
      },
      {
        title: "7 Principles of Rich Web Applications",
        url: "https://rauchg.com/2014/7-principles-of-rich-web-applications",
      },
      {
        title: "Tailwind CSS Tips Every Developer Should Know",
        url: "https://www.nikolailehbr.ink/blog/tailwindcss-v3-tips#common-practices",
      },
      { title: "Performance Hints", url: "https://abseil.io/fast/hints.html" },
      { title: "Logging Sucks", url: "https://loggingsucks.com/" },
      {
        title: "Building a Web Search Engine from Scratch in Two Months",
        url: "https://blog.wilsonl.in/search-engine/",
      },
      {
        title: "Collaborative Text Editing without CRDTs or OT",
        url: "https://mattweidner.com/2025/05/21/text-without-crdts.html",
      },
      {
        title: "Rebuilding Linear's Delta Sync Read Path",
        url: "https://linear.app/now/rebuilding-delta-sync-read-path",
      },
      {
        title: "Git at Any Scale",
        url: "https://cursor.com/blog/git-at-any-scale",
      },
      {
        title: "UTC is Enough for Everyone, Right?",
        url: "https://zachholman.com/talk/utc-is-enough-for-everyone-right",
      },
      { title: "Bug Blindness", url: "https://danluu.com/bug-blind/" },
      {
        title: "On-Call Is Now Theatre",
        url: "https://boristane.com/blog/on-call-is-now-theatre/",
      },
      {
        title: "Your Job Is to Deliver Code You Have Proven to Work",
        url: "https://simonwillison.net/2025/Dec/18/code-proven-to-work/",
      },
    ],
  },
  {
    title: "AI & Agents",
    bookmarks: [
      {
        title: "Shipping at Inference-Speed",
        url: "https://steipete.me/posts/2025/shipping-at-inference-speed",
      },
      {
        title: "Vibing a Non-Trivial Ghostty Feature",
        url: "https://mitchellh.com/writing/non-trivial-vibing#user-content-fnref-2",
      },
      {
        title: "How to Pair With an Agent",
        url: "https://ampcode.com/how-to-pair-with-an-agent",
      },
      {
        title: "Claude Code Creator Boris's Setup",
        url: "https://www.reddit.com/r/ClaudeAI/comments/1q2c0ne/claude_code_creator_boris_shares_his_setup_with/",
      },
      {
        title: "How I Code from the Gym",
        url: "https://stacktoheap.com/blog/2026/02/08/how-i-code-from-the-gym/",
      },
    ],
  },
  {
    title: "Reading",
    bookmarks: [
      {
        title: "How to Do Great Work",
        url: "https://paulgraham.com/greatwork.html",
      },
      {
        title: "How to Get Startup Ideas",
        url: "https://paulgraham.com/startupideas.html",
      },
      {
        title: "Software Developer Promotions: Getting to the Next Level",
        url: "https://blog.pragmaticengineer.com/software-engineering-promotions/",
      },
      {
        title: "How to Make Your First Open Source Contribution",
        url: "https://whitep4nth3r.com/blog/how-to-make-your-first-open-source-contribution/",
      },
      {
        title: "A Word on Omarchy",
        url: "https://xn--gckvb8fzb.com/a-word-on-omarchy/",
      },
      { title: "Honkish", url: "https://benji.org/honkish" },
      { title: "Don't Ask to Ask, Just Ask", url: "https://dontasktoask.com/" },
      { title: "BOFH", url: "https://bofh.bjash.com/bofh/bofh1.html" },
    ],
  },
  {
    title: "Tools",
    bookmarks: [
      { title: "Flexoki", url: "https://stephango.com/flexoki" },
      { title: "Better Auth", url: "https://www.better-auth.com/" },
      {
        title: "Convex Presence",
        url: "https://www.convex.dev/components/presence",
      },
      { title: "bhvr", url: "https://bhvr.dev/" },
    ],
  },
];
