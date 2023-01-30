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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M13.5,20C6.9,13.9 3.5,10.8 3.5,7.1C3.5,4 5.9,1.6 9,1.6C10.7,1.6 12.4,2.4 13.5,3.7C14.6,2.4 16.3,1.6 18,1.6C21.1,1.6 23.5,4 23.5,7.1C23.5,10.9 20.1,14 13.5,20M12,21.1C5.4,15.2 1.5,11.7 1.5,7C1.5,6.8 1.5,6.6 1.5,6.4C0.9,7.3 0.5,8.4 0.5,9.6C0.5,13.4 3.9,16.5 10.5,22.4L12,21.1Z" fill="{color}"/></svg>