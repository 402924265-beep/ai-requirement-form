const words = {
  title: ["AI 需求提报", "Yapay Zekâ Talep Formu", "AI Request Form"],
  stages: [
    ["信息与流程", "Bilgiler ve süreç", "Details and flow"],
    ["目标与 AI 功能", "Hedefler ve YZ", "Goals and AI"],
    ["核对与导出", "Kontrol ve indir", "Review and export"]
  ],
  applicant: ["申请人信息", "Başvuran bilgileri", "Requester details"],
  applicantName: ["申请人姓名", "Başvuranın adı", "Requester name"],
  department: ["所属部门", "Bölüm", "Department"],
  contact: ["联系方式", "İletişim bilgisi", "Contact"],
  nameHint: ["请输入姓名", "Adı girin", "Enter name"],
  departmentHint: ["请选择或输入部门", "Bölümü girin", "Enter department"],
  contactHint: ["手机号或邮箱", "Telefon veya e-posta", "Phone or email"],
  businessManagers: ["业务经理", "İş birimi yöneticileri", "Business managers"],
  productManagers: ["产品经理", "Ürün yöneticileri", "Product managers"],
  name: ["姓名", "Ad", "Name"],
  remove: ["删除", "Sil", "Remove"],
  addBusiness: ["添加业务经理", "İş birimi yöneticisi ekle", "Add business manager"],
  addProduct: ["添加产品经理", "Ürün yöneticisi ekle", "Add product manager"],
  businessIntro: ["业务简介", "İşin kısa tanımı", "Business overview"],
  businessIntroHint: ["简要说明你负责的业务及目的", "Sorumlu olduğunuz işi ve amacını kısaca açıklayın", "Briefly describe the work and its purpose"],
  flowFiles: ["现有流程文件（可选）", "Mevcut süreç dosyası (isteğe bağlı)", "Existing process file (optional)"],
  referenceFiles: ["参考表格（可选）", "Referans tabloları (isteğe bağlı)", "Reference tables (optional)"],
  flowFormats: ["Word / PDF / 图片，单个不超过 12 MB", "Word / PDF / görsel; dosya başına en çok 12 MB", "Word / PDF / image; 12 MB per file"],
  tableFormats: ["Excel / CSV，单个不超过 12 MB", "Excel / CSV; dosya başına en çok 12 MB", "Excel / CSV; 12 MB per file"],
  chooseFile: ["选择文件", "Dosya seç", "Choose files"],
  noFiles: ["未选择文件", "Dosya seçilmedi", "No file selected"],
  steps: ["现有流程步骤", "Mevcut süreç adımları", "Current process steps"],
  step: ["步骤", "Adım", "Step"],
  stepTitle: ["步骤描述／名称", "Adım adı / kısa açıklama", "Step title / brief description"],
  stepTitleHint: ["这一步做什么", "Bu adımda ne yapılır?", "What happens in this step?"],
  detail: ["具体操作内容", "Ayrıntılı işlem açıklaması", "Detailed work instructions"],
  detailHint: ["请详细写明如何操作、使用什么资料、判断和交接要点", "İşlemi, kullanılan bilgileri, kararları ve devri ayrıntılı açıklayın", "Describe actions, inputs, decisions, and handoffs in detail"],
  owner: ["责任人／岗位", "Sorumlu kişi / rol", "Owner / role"],
  ownerHint: ["姓名或岗位", "Ad veya rol", "Name or role"],
  cadence: ["周期或期限", "Sıklık veya son tarih", "Frequency or deadline"],
  cadenceHint: ["如：每天／每周／3 天内", "Örn. günlük / haftalık / 3 gün içinde", "E.g. daily / weekly / within 3 days"],
  input: ["输入资料", "Girdi / kaynaklar", "Inputs / sources"],
  inputHint: ["使用的资料或系统", "Kullanılan belge veya sistem", "Documents or systems used"],
  output: ["输出／交接结果", "Çıktı / devir sonucu", "Output / handoff"],
  outputHint: ["结果交给谁", "Sonuç kime teslim edilir?", "Result and next recipient"],
  addStep: ["添加步骤", "Adım ekle", "Add step"],
  goals: ["改进目标", "İyileştirme hedefleri", "Improvement goals"],
  goalsHint: ["勾选要改善的流程步骤，再写问题和希望改成什么样。", "İyileştirilecek adımları seçin; sorunu ve istenen sonucu yazın.", "Select steps to improve, then describe the problem and desired result."],
  problem: ["目前有什么问题？", "Şu anki sorun nedir?", "What is the current problem?"],
  problemHint: ["请具体描述这一步的困难、重复操作或容易出错的地方", "Bu adımın zorluğunu, tekrarı veya hata riskini açıklayın", "Describe friction, repeated work, or errors in this step"],
  desired: ["希望如何改进、改成什么样？", "Nasıl iyileştirilmeli? İstenen durum nedir?", "How should it improve? What should it become?"],
  desiredHint: ["写清希望达到的工作方式和结果", "İstenen çalışma biçimini ve sonucu açıklayın", "Describe the desired way of working and result"],
  functions: ["希望 AI 实现的功能", "İstenen YZ işlevleri", "Desired AI functions"],
  functionsHint: ["可多选；功能仅供参考，最终由业务经理与产品经理确认。", "Birden fazla seçilebilir; son karar iş birimi ve ürün yöneticilerine aittir.", "Select any that apply; business and product managers will confirm the final scope."],
  otherFunction: ["其他功能（可选）", "Diğer işlev (isteğe bağlı)", "Other function (optional)"],
  otherFunctionHint: ["还有什么希望 AI 帮你完成？", "YZ'nin başka ne yapmasını istersiniz?", "What else should AI help with?"],
  review: ["核对提报内容", "Talebi kontrol edin", "Review your request"],
  reviewHint: ["请核对各项信息；可返回修改。", "Bilgileri kontrol edin; gerekirse geri dönüp düzenleyin.", "Check the details and go back to edit if needed."],
  attachments: ["附件", "Ekler", "Attachments"],
  notSent: ["此网页尚未连接接收系统。Excel 含表单信息和附件清单；提报包另含附件文件。两种导出都只保存到本机。", "Bu sayfa henüz bir alıcı sisteme bağlı değil. Excel form bilgilerini ve ek listesini içerir; talep paketi ek dosyalarını da içerir. Her iki dışa aktarma da yalnızca cihazınıza kaydedilir.", "This page is not connected to a receiving system. Excel includes form details and an attachment list; the request package also includes the files. Both exports save only to your device."],
  download: ["下载提报包（含附件）", "Talep paketini indir (eklerle)", "Download package with files"],
  excelDownload: ["导出 Excel", "Excel'e aktar", "Export Excel"],
  excelBusy: ["正在生成 Excel…", "Excel hazırlanıyor…", "Preparing Excel…"],
  excelHint: ["可随时导出当前已填内容；附件文件不嵌入 Excel。", "Doldurulan bilgileri istediğiniz zaman dışa aktarın; ek dosyaları Excel'e gömülmez.", "Export the current draft anytime; attachment files are not embedded in Excel."],
  exportedAt: ["导出时间", "Dışa aktarma zamanı", "Exported at"],
  fileType: ["附件类别", "Ek türü", "Attachment type"],
  fileName: ["文件名", "Dosya adı", "File name"],
  fileSize: ["大小", "Boyut", "Size"],
  excelAttachmentNote: ["附件文件不嵌入 Excel；如需文件内容，请下载提报包。", "Ek dosyaları Excel'e gömülmez; dosyaların içeriği için talep paketini indirin.", "Attachment files are not embedded in Excel; download the request package for their contents."],
  category: ["功能类别", "İşlev grubu", "Function group"],
  functionName: ["功能", "İşlev", "Function"],
  goalSelected: ["已选择改进", "İyileştirme seçildi", "Selected for improvement"],
  yes: ["是", "Evet", "Yes"],
  no: ["否", "Hayır", "No"],
  saved: ["草稿已保存在当前浏览器", "Taslak bu tarayıcıda kaydedildi", "Draft saved in this browser"],
  fileReminder: ["刷新页面后须重新选择附件。", "Sayfa yenilenirse ekleri yeniden seçmeniz gerekir.", "Reselect attachments after refreshing the page."],
  next: ["继续", "Devam", "Continue"],
  back: ["上一步", "Önceki adım", "Previous step"],
  tooLarge: ["附件超出限制：单个不超过 12 MB，全部不超过 24 MB。", "Ek sınırı aşıldı: dosya başına 12 MB, toplam 24 MB.", "Attachment limit exceeded: 12 MB per file, 24 MB total."],
  exportError: ["导出失败，请重试。", "Dışa aktarma başarısız; yeniden deneyin.", "Export failed; please retry."],
  exportBusy: ["正在整理提报包…", "Talep paketi hazırlanıyor…", "Preparing request package…"],
  none: ["无", "Yok", "None"],
  selected: ["已选功能", "Seçilen işlevler", "Selected functions"],
  improvementFor: ["改进步骤", "İyileştirilecek adım", "Step to improve"]
};

const groups = [
  { title: ["数据与展示", "Veri ve gösterim", "Data and display"], ids: ["autoFetch", "dataCheck", "dashboard", "systemLink"] },
  { title: ["识别与内容", "Tanıma ve içerik", "Recognition and content"], ids: ["documentRead", "imageRead", "speechText", "generateTranslate"] },
  { title: ["分析与优化", "Analiz ve optimizasyon", "Analysis and optimization"], ids: ["forecast", "anomaly", "rules", "optimize"] },
  { title: ["沟通与执行", "İletişim ve yürütme", "Communication and execution"], ids: ["qa", "push", "automation", "mobile"] }
];
const capabilities = {
  autoFetch: ["自动取数", "Otomatik veri çekme", "Automatic data retrieval"],
  dataCheck: ["数据整理核对", "Veri düzenleme ve doğrulama", "Data organization and checks"],
  dashboard: ["绩效驾驶舱", "Performans panosu", "Performance dashboard"],
  systemLink: ["系统数据联动", "Sistemler arası veri bağlantısı", "Cross-system data linking"],
  documentRead: ["文件／表格识别", "Belge / tablo tanıma", "Document / table recognition"],
  imageRead: ["图片识别", "Görsel tanıma", "Image recognition"],
  speechText: ["语音转文字", "Konuşmayı metne dönüştürme", "Speech to text"],
  generateTranslate: ["内容生成与翻译", "İçerik üretimi ve çeviri", "Content generation and translation"],
  forecast: ["趋势预测", "Eğilim tahmini", "Trend forecasting"],
  anomaly: ["异常监测", "Anomali izleme", "Anomaly monitoring"],
  rules: ["规则计算", "Kural tabanlı hesaplama", "Rule-based calculation"],
  optimize: ["方案优化", "Plan optimizasyonu", "Plan optimization"],
  qa: ["智能问答", "Akıllı soru-cevap", "Intelligent Q&A"],
  push: ["消息推送", "Bildirim gönderme", "Notification delivery"],
  automation: ["流程自动执行", "Süreç otomasyonu", "Workflow automation"],
  mobile: ["手机端使用", "Mobil kullanım", "Mobile access"]
};

const localeIndex = { zh: 0, tr: 1, en: 2 };
const storageKey = "haier-ai-requirement-draft-v1";
const defaultPerson = () => ({ name: "", department: "", contact: "" });
const defaultStep = () => ({ id: crypto.randomUUID(), title: "", detail: "", owner: "", cadence: "", input: "", output: "" });
const initial = () => ({
  applicant: { name: "", department: "", contact: "" },
  businessManagers: [defaultPerson()],
  productManagers: [defaultPerson()],
  intro: "",
  steps: [defaultStep()],
  goals: {},
  selectedFunctions: [],
  otherFunction: ""
});
let state;
try { state = JSON.parse(sessionStorage.getItem(storageKey)) || initial(); } catch { state = initial(); }
if (!Array.isArray(state.businessManagers) || !state.businessManagers.length) state.businessManagers = [defaultPerson()];
if (!Array.isArray(state.productManagers) || !state.productManagers.length) state.productManagers = [defaultPerson()];
if (!Array.isArray(state.steps) || !state.steps.length) state.steps = [defaultStep()];
state.goals ||= {};
state.selectedFunctions ||= [];
const files = { flow: [], reference: [] };
let language = localStorage.getItem("haier-ai-requirement-language") || "zh";
if (!(language in localeIndex)) language = "zh";
let current = 0;

const tr = (key) => words[key][localeIndex[language]];
const trans = (list) => list[localeIndex[language]];
const nextText = (label) => tr("next") + (language === "zh" ? "：" : ": ") + label;
const esc = (value = "") => String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
const req = '<span class="required" aria-label="required">*</span>';
const val = (value) => esc(value ?? "");
const field = (label, value, attrs = "") => `<div class="field"><label>${label}${attrs.includes("data-required") ? " " + req : ""}<input type="text" value="${val(value)}" ${attrs}></label></div>`;
const textarea = (label, value, attrs = "", long = false) => `<div class="field"><label>${label} ${attrs.includes("data-required") ? req : ""}<textarea class="${long ? "long" : ""}" ${attrs}>${val(value)}</textarea></label></div>`;
const actionBar = (nextLabel, back = true) => `<div class="screen-actions">${back ? `<button class="button" type="button" data-action="back">${tr("back")}</button>` : ""}<button class="button primary" type="button" data-action="next">${nextLabel}</button></div>`;

function persist() {
  try { sessionStorage.setItem(storageKey, JSON.stringify(state)); } catch {}
  document.getElementById("save-status").textContent = tr("saved");
}
function showMessage(message) {
  const box = document.getElementById("message");
  box.textContent = message;
  box.hidden = !message;
  if (message) window.scrollTo({ top: 0, behavior: "smooth" });
}
function renderProgress() {
  document.getElementById("progress").innerHTML = words.stages.map((names, i) =>
    `<button type="button" data-action="nav" data-index="${i}" class="${i === current ? "current" : ""}" ${i === current ? 'aria-current="step"' : ""}><span class="number">${String(i + 1).padStart(2, "0")}</span><span class="step-label">${trans(names)}</span></button>`
  ).join("");
}
function personTable(kind, title, addKey) {
  const rows = state[kind].map((p, i) => `<div class="repeat-row">
    <span class="repeat-index">${i + 1}</span>
    <input aria-label="${title} ${i + 1} · ${tr("name")}" type="text" data-kind="${kind}" data-index="${i}" data-field="name" value="${val(p.name)}" placeholder="${tr("nameHint")}">
    <input aria-label="${title} ${i + 1} · ${tr("department")}" type="text" data-kind="${kind}" data-index="${i}" data-field="department" value="${val(p.department)}" placeholder="${tr("departmentHint")}">
    <input class="manager-contact" aria-label="${title} ${i + 1} · ${tr("contact")}" type="text" data-kind="${kind}" data-index="${i}" data-field="contact" value="${val(p.contact)}" placeholder="${tr("contactHint")}">
    <button type="button" class="text-button remove-person" data-action="remove-person" data-kind="${kind}" data-index="${i}" ${state[kind].length === 1 ? "disabled" : ""}>${tr("remove")}</button>
  </div>`).join("");
  return `<section class="panel"><h2>${title} ${req}</h2><div class="repeat-table">
    <div class="repeat-head"><span>#</span><span>${tr("name")} ${req}</span><span>${tr("department")} ${req}</span><span>${tr("contact")} ${req}</span><span></span></div>
    ${rows}<button class="text-button add-line" type="button" data-action="add-person" data-kind="${kind}">${tr(addKey)}</button>
  </div></section>`;
}
function firstScreen() {
  const a = state.applicant;
  return `<div class="overview-screen"><section class="panel"><h2>${tr("applicant")} ${req}</h2><div class="grid-3">
    ${field(tr("applicantName"), a.name, `data-kind="applicant" data-field="name" data-required placeholder="${tr("nameHint")}"`)}
    ${field(tr("department"), a.department, `data-kind="applicant" data-field="department" data-required placeholder="${tr("departmentHint")}"`)}
    ${field(tr("contact"), a.contact, `data-kind="applicant" data-field="contact" data-required placeholder="${tr("contactHint")}"`)}
  </div></section>
  <div class="owners-grid">
    ${personTable("businessManagers", tr("businessManagers"), "addBusiness")}
    ${personTable("productManagers", tr("productManagers"), "addProduct")}
  </div>
  ${processScreen()}</div>`;
}
function uploadBox(title, formats, kind, accept) {
  return `<div class="upload-box"><h3>${title}</h3><small>${formats}</small>
    <label class="file-trigger">${tr("chooseFile")}<input type="file" data-file-kind="${kind}" accept="${accept}" multiple aria-label="${title}"></label>
    <div class="files">${files[kind].length ? files[kind].map(f => esc(f.name)).join("<br>") : tr("noFiles")}</div>
  </div>`;
}
function processCard(s, i) {
  return `<div class="step-card"><div class="step-card-head"><strong>${tr("step")} ${i + 1}</strong><button type="button" class="text-button" data-action="remove-step" data-index="${i}" ${state.steps.length === 1 ? "disabled" : ""}>${tr("remove")}</button></div>
    <div class="step-card-body"><div class="step-title-detail">
      ${field(tr("stepTitle"), s.title, `data-kind="steps" data-index="${i}" data-field="title" data-required placeholder="${tr("stepTitleHint")}"`)}
      ${textarea(tr("detail"), s.detail, `data-kind="steps" data-index="${i}" data-field="detail" data-required placeholder="${tr("detailHint")}"`, true)}
    </div><div class="step-meta">
      ${field(tr("owner"), s.owner, `data-kind="steps" data-index="${i}" data-field="owner" data-required placeholder="${tr("ownerHint")}"`)}
      ${field(tr("cadence"), s.cadence, `data-kind="steps" data-index="${i}" data-field="cadence" data-required placeholder="${tr("cadenceHint")}"`)}
      ${field(tr("input"), s.input, `data-kind="steps" data-index="${i}" data-field="input" placeholder="${tr("inputHint")}"`)}
      ${field(tr("output"), s.output, `data-kind="steps" data-index="${i}" data-field="output" data-required placeholder="${tr("outputHint")}"`)}
    </div></div></div>`;
}
function processScreen() {
  return `<section class="panel"><div class="intro-upload">
    ${textarea(tr("businessIntro"), state.intro, `data-kind="intro" data-required placeholder="${tr("businessIntroHint")}"`)}
    ${uploadBox(tr("flowFiles"), tr("flowFormats"), "flow", ".doc,.docx,.pdf,.png,.jpg,.jpeg")}
    ${uploadBox(tr("referenceFiles"), tr("tableFormats"), "reference", ".xls,.xlsx,.csv")}
  </div><p class="hint">${tr("fileReminder")}</p></section>
  <section class="panel"><h2>${tr("steps")} ${req}</h2>
    ${state.steps.map(processCard).join("")}
    <button class="button" type="button" data-action="add-step">${tr("addStep")}</button>
  </section>${actionBar(nextText(trans(words.stages[1])), false)}`;
}
function goalCard(s, i) {
  const goal = state.goals[s.id] || { selected: false, problem: "", desired: "" };
  return `<div class="step-card"><label class="goal-choice"><input type="checkbox" data-goal-id="${s.id}" ${goal.selected ? "checked" : ""}><strong>${tr("step")} ${i + 1} · ${esc(s.title || tr("stepTitleHint"))}</strong></label>
    ${goal.selected ? `<div class="step-card-body goal-fields"><div class="grid-2">
      ${textarea(tr("problem"), goal.problem, `data-kind="goal" data-id="${s.id}" data-field="problem" data-required placeholder="${tr("problemHint")}"`, true)}
      ${textarea(tr("desired"), goal.desired, `data-kind="goal" data-id="${s.id}" data-field="desired" data-required placeholder="${tr("desiredHint")}"`, true)}
    </div></div>` : ""}
  </div>`;
}
function functionGroups() {
  return `<div class="capability-groups">${groups.map(group => `<div class="capability-group"><h3>${trans(group.title)}</h3>
    ${group.ids.map(id => `<label class="capability"><input type="checkbox" data-capability="${id}" ${state.selectedFunctions.includes(id) ? "checked" : ""}><span>${trans(capabilities[id])}</span></label>`).join("")}
  </div>`).join("")}</div>`;
}
function goalsScreen() {
  return `<section class="panel"><h2>${tr("goals")}</h2><p class="lead">${tr("goalsHint")}</p>
    ${state.steps.map(goalCard).join("")}
  </section><section class="panel"><h2>${tr("functions")}</h2><p class="lead">${tr("functionsHint")}</p>
    ${functionGroups()}
    <div class="field" style="margin-top:18px"><label>${tr("otherFunction")}<input type="text" data-kind="otherFunction" value="${val(state.otherFunction)}" placeholder="${tr("otherFunctionHint")}"></label></div>
  </section>${actionBar(nextText(trans(words.stages[2])))}`;
}
function detailList(items) { return `<ul>${items.map(v => `<li>${esc(v)}</li>`).join("")}</ul>`; }
function reviewScreen() {
  const goals = state.steps.filter(s => state.goals[s.id]?.selected);
  const selected = state.selectedFunctions.map(id => trans(capabilities[id]));
  if (state.otherFunction.trim()) selected.push(state.otherFunction.trim());
  return `<section class="panel"><h2>${tr("review")}</h2><p class="lead">${tr("reviewHint")}</p>
    <div class="review-grid">
      <div class="review-block"><h3>${tr("applicant")}</h3>
        <p>${esc(state.applicant.name)} · ${esc(state.applicant.department)} · ${esc(state.applicant.contact)}</p>
        <h4>${tr("businessManagers")}</h4>${detailList(state.businessManagers.map(p => `${p.name} · ${p.department} · ${p.contact}`))}
        <h4>${tr("productManagers")}</h4>${detailList(state.productManagers.map(p => `${p.name} · ${p.department} · ${p.contact}`))}
      </div>
      <div class="review-block"><h3>${tr("businessIntro")}</h3><p>${esc(state.intro)}</p>
        <h4>${tr("attachments")}</h4>${detailList([...files.flow, ...files.reference].map(f => f.name).length ? [...files.flow, ...files.reference].map(f => f.name) : [tr("none")])}
      </div>
      <div class="review-block"><h3>${tr("steps")}</h3><ol>${state.steps.map(s => `<li><strong>${esc(s.title)}</strong><p>${esc(s.detail)}</p><small>${esc(s.owner)} · ${esc(s.cadence)} · ${esc(s.output)}</small></li>`).join("")}</ol></div>
      <div class="review-block"><h3>${tr("goals")}</h3><ol>${goals.map(s => `<li><strong>${esc(s.title)}</strong><p>${tr("problem")}：${esc(state.goals[s.id].problem)}</p><p>${tr("desired")}：${esc(state.goals[s.id].desired)}</p></li>`).join("")}</ol>
        <h4>${tr("selected")}</h4>${detailList(selected.length ? selected : [tr("none")])}
      </div>
    </div>
    <p class="notice">${tr("notSent")}</p>
  </section><div class="screen-actions"><button class="button" type="button" data-action="back">${tr("back")}</button><button class="button primary" type="button" data-action="export">${tr("download")}</button></div>`;
}
function render() {
  document.documentElement.lang = language;
  document.title = tr("title");
  document.getElementById("site-title").textContent = tr("title");
  document.getElementById("excel-export").textContent = tr("excelDownload");
  document.getElementById("excel-export").title = tr("excelHint");
  document.querySelectorAll(".language-switch button").forEach(button => button.setAttribute("aria-current", String(button.dataset.lang === language)));
  renderProgress();
  document.getElementById("screen").innerHTML = [firstScreen, goalsScreen, reviewScreen][current]();
  document.getElementById("save-status").textContent = tr("saved");
}
function updateValue(el) {
  const { kind, field, index, id } = el.dataset;
  if (kind === "applicant") state.applicant[field] = el.value;
  else if (kind === "intro") state.intro = el.value;
  else if (kind === "otherFunction") state.otherFunction = el.value;
  else if (kind === "goal") state.goals[id][field] = el.value;
  else if (kind === "steps" || kind === "businessManagers" || kind === "productManagers") state[kind][Number(index)][field] = el.value;
  else return;
  persist();
}
function fileLimitOkay(next, kind) {
  const all = [...files.flow, ...files.reference].filter(f => !files[kind].includes(f)).concat(next);
  return all.every(f => f.size <= 12 * 1024 * 1024) && all.reduce((sum, f) => sum + f.size, 0) <= 24 * 1024 * 1024;
}
const screen = document.getElementById("screen");
document.getElementById("request-form").addEventListener("submit", e => e.preventDefault());
screen.addEventListener("input", e => { if (e.target.dataset.kind) updateValue(e.target); });
screen.addEventListener("change", e => {
  const el = e.target;
  if (el.dataset.goalId) {
    const id = el.dataset.goalId;
    state.goals[id] ||= { selected: false, problem: "", desired: "" };
    state.goals[id].selected = el.checked;
    persist(); render();
  } else if (el.dataset.capability) {
    const id = el.dataset.capability;
    state.selectedFunctions = el.checked ? [...new Set([...state.selectedFunctions, id])] : state.selectedFunctions.filter(x => x !== id);
    persist();
  } else if (el.dataset.fileKind) {
    const kind = el.dataset.fileKind;
    const next = Array.from(el.files);
    if (!fileLimitOkay(next, kind)) { showMessage(tr("tooLarge")); el.value = ""; return; }
    files[kind] = next;
    showMessage(""); render();
  }
});
document.addEventListener("click", async e => {
  const langButton = e.target.closest("[data-lang]");
  if (langButton) {
    language = langButton.dataset.lang;
    localStorage.setItem("haier-ai-requirement-language", language);
    showMessage(""); render(); return;
  }
  const button = e.target.closest("[data-action]");
  if (!button) return;
  const { action, kind } = button.dataset;
  if (action === "add-person") state[kind].push(defaultPerson());
  else if (action === "remove-person") { if (state[kind].length > 1) state[kind].splice(Number(button.dataset.index), 1); }
  else if (action === "add-step") state.steps.push(defaultStep());
  else if (action === "remove-step") {
    if (state.steps.length > 1) {
      const [removed] = state.steps.splice(Number(button.dataset.index), 1);
      delete state.goals[removed.id];
    }
  }
  else if (action === "back") current = Math.max(0, current - 1);
  else if (action === "next") current = Math.min(2, current + 1);
  else if (action === "nav") current = Number(button.dataset.index);
  else if (action === "excel") { await exportExcel(button); return; }
  else if (action === "export") { await exportPackage(button); return; }
  else return;
  persist(); showMessage(""); render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}
function excelLines(value) {
  const lines = [];
  for (const paragraph of String(value ?? "").split(/\r?\n/)) {
    let line = "", width = 0;
    for (const character of paragraph) {
      const size = character.codePointAt(0) > 0x2e80 ? 2 : 1;
      if (line && width + size > 68) { lines.push(line); line = ""; width = 0; }
      line += character;
      width += size;
    }
    lines.push(line);
  }
  return lines;
}
function excelText(rows, label, value) {
  excelLines(value).forEach((line, i) => rows.push([i ? "" : label, line]));
}
function excelSheet(XLSX, workbook, names, rows, widths) {
  const sheet = XLSX.utils.aoa_to_sheet(rows);
  sheet["!cols"] = widths.map(wch => ({ wch }));
  sheet["!rows"] = rows.map(row => ({ hpt: row.length ? 23 : 10 }));
  XLSX.utils.book_append_sheet(workbook, sheet, trans(names));
}
async function exportExcel(button) {
  button.disabled = true;
  button.textContent = tr("excelBusy");
  try {
    const XLSX = await import("./vendor/xlsx.mjs");
    const workbook = XLSX.utils.book_new();
    const people = [[tr("title")], [tr("exportedAt"), new Date().toLocaleString()], [],
      [tr("applicant")], [tr("applicantName"), state.applicant.name], [tr("department"), state.applicant.department], [tr("contact"), state.applicant.contact]];
    for (const [kind, title] of [["businessManagers", tr("businessManagers")], ["productManagers", tr("productManagers")]]) {
      people.push([], [title], [tr("name"), tr("department"), tr("contact")]);
      state[kind].forEach(person => people.push([person.name, person.department, person.contact]));
    }
    people.push([], [tr("businessIntro")]);
    excelText(people, "", state.intro);
    excelSheet(XLSX, workbook, ["人员与业务", "Kişiler ve iş", "People and business"], people, [30, 80, 40]);

    const process = [[tr("steps")]];
    state.steps.forEach((step, i) => {
      if (i) process.push([]);
      process.push([`${tr("step")} ${i + 1}`, step.title]);
      excelText(process, tr("detail"), step.detail);
      process.push([tr("owner"), step.owner], [tr("cadence"), step.cadence], [tr("input"), step.input], [tr("output"), step.output]);
    });
    excelSheet(XLSX, workbook, ["现有流程", "Mevcut süreç", "Current process"], process, [30, 96]);

    const goals = [[tr("goals")]];
    state.steps.forEach((step, i) => {
      const goal = state.goals[step.id];
      if (!goal || (!goal.selected && !goal.problem?.trim() && !goal.desired?.trim())) return;
      goals.push([], [`${tr("step")} ${i + 1}`, step.title], [tr("goalSelected"), goal.selected ? tr("yes") : tr("no")]);
      excelText(goals, tr("problem"), goal.problem);
      excelText(goals, tr("desired"), goal.desired);
    });
    if (goals.length === 1) goals.push([tr("none")]);
    goals.push([], [tr("functions")], [tr("category"), tr("functionName")]);
    for (const group of groups) for (const id of group.ids) {
      if (state.selectedFunctions.includes(id)) goals.push([trans(group.title), trans(capabilities[id])]);
    }
    if (state.otherFunction.trim()) excelText(goals, tr("otherFunction"), state.otherFunction);
    if (!state.selectedFunctions.length && !state.otherFunction.trim()) goals.push([tr("none")]);
    excelSheet(XLSX, workbook, ["改进与 AI", "İyileştirme ve YZ", "Goals and AI"], goals, [30, 96]);

    const attachments = [[tr("attachments")], [tr("fileType"), tr("fileName"), tr("fileSize")]];
    for (const [kind, title] of [["flow", tr("flowFiles")], ["reference", tr("referenceFiles")]]) {
      files[kind].forEach(file => attachments.push([title, file.name, file.size < 1048576 ? `${(file.size / 1024).toFixed(1)} KB` : `${(file.size / 1048576).toFixed(2)} MB`]));
    }
    if (attachments.length === 2) attachments.push([tr("none")]);
    attachments.push([]);
    excelText(attachments, "", tr("excelAttachmentNote"));
    excelSheet(XLSX, workbook, ["附件清单", "Ek listesi", "Attachments"], attachments, [32, 82, 18]);

    const data = XLSX.write(workbook, { bookType: "xlsx", type: "array", compression: true });
    downloadBlob(new Blob([data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }), `ai-requirement-${new Date().toISOString().slice(0, 10)}.xlsx`);
  } catch {
    showMessage(tr("exportError"));
  } finally {
    button.disabled = false;
    button.textContent = tr("excelDownload");
  }
}
async function fileData(file, kind) {
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
  return { kind, name: file.name, type: file.type, size: file.size, dataBase64: String(dataUrl).split(",")[1] };
}
async function exportPackage(button) {
  button.disabled = true;
  button.textContent = tr("exportBusy");
  try {
    const attachments = await Promise.all([...files.flow.map(f => fileData(f, "flow")), ...files.reference.map(f => fileData(f, "reference"))]);
    const data = { schemaVersion: 1, createdAt: new Date().toISOString(), contentLanguage: language, request: state, attachments };
    downloadBlob(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }), `ai-requirement-${new Date().toISOString().slice(0, 10)}.json`);
  } catch {
    showMessage(tr("exportError"));
  } finally {
    button.disabled = false;
    button.textContent = tr("download");
  }
}
persist();
render();
