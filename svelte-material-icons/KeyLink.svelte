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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7.5 3C5 3 3 5 3 7.5S5 12 7.5 12C9.5 12 11.1 10.8 11.7 9H15V12H18V9H21V6H11.7C11.1 4.2 9.5 3 7.5 3M7.5 6C8.3 6 9 6.7 9 7.5S8.3 9 7.5 9 6 8.3 6 7.5 6.7 6 7.5 6M10 14C8.4 14 6 15.1 6 18C6 20.9 8.4 22 10 22H11V20H10C9.7 20 8 19.9 8 18C8 16.2 9.5 16 10 16H11V14M13 14V16H14C14.3 16 16 16.1 16 18C16 19.8 14.5 20 14 20H13V22H14C15.6 22 18 20.9 18 18C18 15.1 15.6 14 14 14M9 17V19H15V17H9Z" fill="{color}"/></svg>