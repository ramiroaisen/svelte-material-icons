<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = void 0;
  export let ariaHidden = void 0;
  export let title = void 0;
  export let desc = void 0;

  let className = void 0;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M22.11 21.46L20.84 22.73L19.11 21H4C2.89 21 2 20.1 2 19V8C2 6.89 2.89 6 4 6H4.11L1.11 3L2.39 1.73L22.11 21.46M22 18.8L8 4.8V4C8 2.89 8.89 2 10 2H14C15.11 2 16 2.9 16 4V6H20C21.11 6 22 6.9 22 8V18.8M14 4H10V6H14V4Z" fill="{color}"/></svg>