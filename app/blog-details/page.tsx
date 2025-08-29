"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import styles from "./BlogDetail.module.less";
import AppHeader from "@components/app-header/AppHeader";

type Fit = "cover" | "contain";

export default function BlogDetailPage() {
    const [fit, setFit] = useState<Fit>("cover");

    const fitLabel = useMemo(
        () => (fit === "cover" ? "Cover (обрезка по контейнеру)" : "Contain (вся картинка целиком)"),
        [fit]
    );

    return (
        <div>
            <AppHeader/>
            <div className={styles.container}>
                {/* Header */}
                <header className={styles.header}>
                    <h1 className={styles.title}>
                        Why SwiftUI Should Be on the Radar of Every Mobile Developer
                    </h1>
                    <p className={styles.meta}>
                        Written by <strong>Lina</strong> · Jan 15, 2025 · 8 min read
                    </p>

                    {/* Переключатель cover / contain */}
                    <div className={styles.fitToggle} role="group" aria-label="Image fit switch">
                        <button
                            className={`${styles.fitBtn} ${fit === "cover" ? styles.active : ""}`}
                            onClick={() => setFit("cover")}
                        >
                            Cover
                        </button>
                        <button
                            className={`${styles.fitBtn} ${fit === "contain" ? styles.active : ""}`}
                            onClick={() => setFit("contain")}
                        >
                            Contain
                        </button>
                        <span className={styles.fitHint}>{fitLabel}</span>
                    </div>
                </header>

                {/* Hero image */}
                <div className={styles.imageWrapper}>
                    <Image
                        src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
                        alt="Developers discussing UI"
                        fill
                        className={styles.image}
                        style={{objectFit: fit}}
                        priority
                    />
                </div>

                {/* Tags + Share */}
                <div className={styles.metaBar}>
                    <div className={styles.tags}>
                        {["swiftui", "ios", "ui/ux", "apple", "architecture"].map((t) => (
                            <span key={t} className={styles.tag}>#{t}</span>
                        ))}
                    </div>
                    <div className={styles.share}>
                        <span>Share:</span>
                        <a href="#" aria-label="share twitter">X/Twitter</a>
                        <a href="#" aria-label="share linkedin">LinkedIn</a>
                        <a href="#" aria-label="share facebook">Facebook</a>
                    </div>
                </div>

                {/* Table of contents */}
                <nav className={styles.toc} aria-label="Table of contents">
                    <h2>Contents</h2>
                    <ol>
                        <li><a href="#rise">The Rise of Declarative UI</a></li>
                        <li><a href="#who">Who Should Learn SwiftUI?</a></li>
                        <li><a href="#cases">Real-World Use Cases</a></li>
                        <li><a href="#advantages">Key Advantages</a></li>
                        <li><a href="#interop">Interoperability with UIKit</a></li>
                        <li><a href="#state">State Management</a></li>
                        <li><a href="#previews">Designing with Previews</a></li>
                        <li><a href="#accessibility">Accessibility & Performance</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ol>
                </nav>

                {/* Content */}
                <article className={styles.content}>
                    <p>
                        SwiftUI has been gaining massive popularity among developers due to its declarative
                        syntax and seamless integration with Apple’s ecosystem. Whether you’re building apps
                        for iOS, macOS, watchOS or tvOS, SwiftUI allows you to create polished UIs with less code
                        — and greater flexibility.
                    </p>

                    <h2 id="rise">The Rise of Declarative UI</h2>
                    <p>
                        Traditional UIKit flows often forced developers to manage view hierarchies manually.
                        SwiftUI flips this model: you describe <em>what</em> the interface should look like, and
                        the framework figures out <em>how</em> to render and update it.
                    </p>

                    <blockquote className={styles.quote}>
                        “SwiftUI is not just a framework — it’s a new way to think about building apps.”
                    </blockquote>

                    <div className={styles.inlineImage}>
                        <Image
                            src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=1400&auto=format&fit=crop"
                            alt="SwiftUI preview"
                            width={1200}
                            height={560}
                            style={{objectFit: fit, width: "100%", height: "auto"}}
                        />
                        <figcaption>Live previews in Xcode make iteration lightning fast.</figcaption>
                    </div>

                    <h2 id="who">Who Should Learn SwiftUI?</h2>
                    <ul>
                        <li>Beginners who want a simple entry to Apple development</li>
                        <li>Experienced iOS devs migrating from UIKit</li>
                        <li>Designers prototyping interactive flows without heavy code</li>
                    </ul>

                    <h2 id="cases">Real-World Use Cases</h2>
                    <p>
                        Finance, health, and retail already ship production apps with SwiftUI. Apple keeps adding
                        SwiftUI-only APIs, nudging the community to adopt it for new projects.
                    </p>

                    <div className={styles.inlineImage}>
                        <Image
                            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1400&auto=format&fit=crop"
                            alt="Team working with Apple platforms"
                            width={1200}
                            height={560}
                            style={{objectFit: fit, width: "100%", height: "auto"}}
                        />
                        <figcaption>One codebase — multiple Apple platforms.</figcaption>
                    </div>

                    <h2 id="advantages">Key Advantages</h2>
                    <ol>
                        <li>Much less boilerplate, faster prototyping</li>
                        <li>Real-time previews in Xcode</li>
                        <li>Unified approach for iOS, iPadOS, macOS, watchOS, tvOS</li>
                        <li>Modern layout system with stacks, grids and scenes</li>
                    </ol>

                    <h2 id="interop">Interoperability with UIKit</h2>
                    <p>
                        SwiftUI and UIKit interop is solid: use <code>UIViewRepresentable</code> /
                        <code>UIViewControllerRepresentable</code> to embed legacy views, or host SwiftUI
                        inside UIKit with <code>UIHostingController</code>.
                    </p>

                    <pre className={styles.code}>
{`struct LegacyPicker: UIViewRepresentable {
    func makeUIView(context: Context) -> UIPickerView { UIPickerView() }
    func updateUIView(_ view: UIPickerView, context: Context) {}
}`}
        </pre>

                    <h2 id="state">State Management</h2>
                    <p>
                        State drives UI. Combine <code>@State</code>, <code>@Binding</code>,
                        <code>@ObservedObject</code>, <code>@StateObject</code> и <code>@EnvironmentObject</code>
                        по назначению, чтобы избегать «магии».
                    </p>

                    <pre className={styles.code}>
{`final class Counter: ObservableObject {
    @Published var value = 0
}

struct CounterView: View {
    @StateObject var vm = Counter()
    var body: some View {
        VStack {
            Text("\\(vm.value)")
            Button("Increment") { vm.value += 1 }
        }
    }
}`}
        </pre>

                    <h2 id="previews">Designing with Previews</h2>
                    <p>
                        Previews позволяют видеть любые состояния экрана в редакторе: тёмная/светлая тема,
                        разные локали, размеры текста и др. Это экономит часы.
                    </p>

                    <div className={styles.inlineImage}>
                        <Image
                            src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1400&auto=format&fit=crop"
                            alt="Preview variants"
                            width={1200}
                            height={560}
                            style={{objectFit: fit, width: "100%", height: "auto"}}
                        />
                        <figcaption>Previews для разных шрифтов, схем и размеров.</figcaption>
                    </div>

                    <h2 id="accessibility">Accessibility & Performance</h2>
                    <p>
                        SwiftUI поощряет доступность «из коробки» и помогает держать 60/120 FPS благодаря
                        оптимизированному диффингу вью-дерева и реактивному обновлению состояний.
                    </p>

                    <details className={styles.faq} id="faq">
                        <summary>FAQ — часто задаваемые вопросы</summary>
                        <div>
                            <p><strong>Подходит ли SwiftUI для сложных экранов?</strong><br/>Да. Для legacy-кейсов можно
                                избирательно использовать UIKit.</p>
                            <p><strong>Нужно ли знать UIKit?</strong><br/>Желательно. Это помогает при интеграциях и
                                тонкой настройке.</p>
                            <p><strong>Можно ли писать только на SwiftUI?</strong><br/>Новые проекты — да. Для старых —
                                гибридный подход.</p>
                        </div>
                    </details>
                </article>

                {/* Author card */}
                <aside className={styles.author}>
                    <Image
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop"
                        alt="Author Lina"
                        width={64}
                        height={64}
                        className={styles.avatar}
                        style={{objectFit: "cover"}}
                    />
                    <div>
                        <h3>Lina</h3>
                        <p>
                            iOS Engineer & Writer. Любит лаконичный код, читаемые интерфейсы и хорошую документацию.
                            Делится опытом миграции на SwiftUI в продакшене.
                        </p>
                    </div>
                </aside>

                {/* Newsletter */}
                <section className={styles.newsletter}>
                    <h3>Subscribe to our newsletter</h3>
                    <p>One email per month — самые полезные материалы по Apple-разработке.</p>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Thanks! You’re subscribed.");
                        }}
                        className={styles.form}
                    >
                        <input type="email" placeholder="you@example.com" required/>
                        <button type="submit">Subscribe</button>
                    </form>
                </section>

                {/* Related */}
                <section className={styles.related}>
                    <h2>Related Blog Posts</h2>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <Image
                                src="https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=900&auto=format&fit=crop"
                                alt="React vs SwiftUI"
                                width={360}
                                height={210}
                                style={{objectFit: fit}}
                            />
                            <h3>React Native vs SwiftUI: Which to Choose?</h3>
                            <p>Comparing two giants in mobile development ecosystems.</p>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop"
                                alt="State Management"
                                width={360}
                                height={210}
                                style={{objectFit: fit}}
                            />
                            <h3>Understanding State Management in SwiftUI</h3>
                            <p>Learn how @State, @Binding, and @ObservedObject work together.</p>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop"
                                alt="Previews Tips"
                                width={360}
                                height={210}
                                style={{objectFit: fit}}
                            />
                            <h3>10 Preview Techniques to Speed Up UI Work</h3>
                            <p>From dark mode to locale testing — all inside Xcode.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
