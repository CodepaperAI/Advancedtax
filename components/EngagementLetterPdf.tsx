import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet
} from "@react-pdf/renderer";

type Props = {
  printedName: string;
  email: string;
  signatureDate: string;
  signatureImage: string;
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 56,
    paddingBottom: 56,
    paddingHorizontal: 56,
    fontSize: 10.5,
    fontFamily: "Helvetica",
    color: "#212824",
    lineHeight: 1.5
  },
  letterhead: {
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "#1b4332",
    paddingBottom: 12
  },
  letterheadTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 16,
    color: "#10281e",
    marginBottom: 2
  },
  letterheadSubtitle: {
    fontSize: 9,
    color: "#5c6862"
  },
  salutation: {
    fontSize: 10.5,
    marginBottom: 14
  },
  heading: {
    fontFamily: "Helvetica-Bold",
    fontSize: 12,
    color: "#10281e",
    marginTop: 18,
    marginBottom: 8
  },
  headingFirst: {
    marginTop: 0
  },
  paragraph: {
    fontSize: 10.5,
    lineHeight: 1.55,
    color: "#212824",
    marginBottom: 8,
    textAlign: "justify"
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#e1e5e1",
    marginVertical: 14
  },
  signoffBlock: {
    marginTop: 24
  },
  signoffText: {
    fontSize: 10.5,
    marginBottom: 2
  },
  signoffCompany: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5
  },
  declarationSection: {
    marginTop: 26,
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: "#e1e5e1"
  },
  detailsGrid: {
    marginTop: 16,
    flexDirection: "column"
  },
  detailsRow: {
    flexDirection: "row",
    marginBottom: 14
  },
  detailsField: {
    flex: 1,
    marginRight: 24
  },
  detailsFieldLast: {
    flex: 1,
    marginRight: 0
  },
  detailsLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: "#5c6862",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 4
  },
  detailsValue: {
    fontSize: 10.5,
    color: "#212824",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e5e1",
    paddingBottom: 4
  },
  signatureBlock: {
    marginTop: 20
  },
  signatureLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: "#5c6862",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 6
  },
  signatureImage: {
    width: 220,
    height: 80,
    objectFit: "contain",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e5e1",
    marginBottom: 4
  },
  footer: {
    position: "absolute",
    bottom: 28,
    left: 56,
    right: 56,
    fontSize: 8,
    color: "#5c6862",
    textAlign: "center",
    borderTopWidth: 1,
    borderTopColor: "#e1e5e1",
    paddingTop: 8
  }
});

const EngagementLetterPdf: React.FC<Props> = ({
  printedName,
  email,
  signatureDate,
  signatureImage
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.letterhead}>
          <Text style={styles.letterheadTitle}>
            Advanced Accounting, Taxation &amp; Business Services
          </Text>
          <Text style={styles.letterheadSubtitle}>Engagement Letter</Text>
        </View>

        <Text style={styles.salutation}>Dear Client,</Text>

        <Text style={[styles.heading, styles.headingFirst]}>
          Engagement as your tax agent for an individual income tax return
        </Text>
        <Text style={styles.paragraph}>
          Thank you for your instructions. We are pleased to accept an
          appointment as your tax agent for your 2026 and outstanding years
          tax returns if applicable.
        </Text>
        <Text style={styles.paragraph}>
          At the outset, we need to enter into an agreement with you setting
          out the terms on which we will assist you, including how we will
          charge you for the work.
        </Text>
        <Text style={styles.paragraph}>
          This letter and the enclosed Terms of Business set out the terms of
          the engagement. Any additions will be by the written agreement of
          both parties. Please read this letter and the Terms of Business
          carefully. If the terms are acceptable to you, please sign and
          return this letter to us. If you do not return a signed copy of
          this letter, but continue to provide us with information and
          instructions, we will assume that you have accepted the terms
          contained in this letter.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.heading}>Scope of services</Text>
        <Text style={styles.paragraph}>
          As your tax agent we will prepare and lodge your individual income
          tax return for 2026 and outstanding years tax returns
          (&#8220;the Services&#8221;).
        </Text>
        <Text style={styles.paragraph}>
          In addition to the financial information required to complete your
          tax return, it is expected that you will make available all
          relevant source documentation to us.
        </Text>
        <Text style={styles.paragraph}>
          In preparing your individual tax return, we will rely on the
          documents and information provided, and representations made by
          you.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.heading}>Matters outside the scope of services</Text>
        <Text style={styles.paragraph}>
          In performing the Services, we will not perform an audit or
          review. Accordingly, no assurances are made in this regard. This
          engagement cannot be relied upon to disclose irregularities
          including fraud, other illegal acts and errors that may exist.
          However, we will inform you of any such matters that come to our
          attention.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.heading}>
          Deduction of professional fees from your tax refund
        </Text>
        <Text style={styles.paragraph}>
          It is agreed that fees for the Services will be deducted directly
          from any tax refund you receive. In accordance with the
          requirements of Advanced Accounting Taxation &amp; Business
          Services, your refund will be deposited into our Trust Account
          with our professional fees deducted and the balance of the funds
          forwarded to you as agreed.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.heading}>Declaration</Text>
        <Text style={styles.paragraph}>
          I declare that the information I have provided is true and correct
          to the best of my knowledge.
        </Text>
        <Text style={styles.paragraph}>
          I acknowledge that I have read, understood and agree to this
          Engagement Letter.
        </Text>

        <View style={styles.signoffBlock}>
          <Text style={styles.signoffText}>Yours sincerely,</Text>
          <Text style={styles.signoffCompany}>
            Advanced Accounting, Taxation &amp; Business Services
          </Text>
        </View>

        <View style={styles.declarationSection}>
          <View style={styles.detailsGrid}>
            <View style={styles.detailsRow}>
              <View style={styles.detailsField}>
                <Text style={styles.detailsLabel}>Printed Name</Text>
                <Text style={styles.detailsValue}>{printedName}</Text>
              </View>
              <View style={styles.detailsFieldLast}>
                <Text style={styles.detailsLabel}>Email Address</Text>
                <Text style={styles.detailsValue}>{email}</Text>
              </View>
            </View>

            <View style={styles.detailsRow}>
              <View style={styles.detailsField}>
                <Text style={styles.detailsLabel}>Date Signed</Text>
                <Text style={styles.detailsValue}>{signatureDate}</Text>
              </View>
              <View style={styles.detailsFieldLast} />
            </View>
          </View>

          <View style={styles.signatureBlock}>
            <Text style={styles.signatureLabel}>Client Signature</Text>
            <Image src={signatureImage} style={styles.signatureImage} />
          </View>
        </View>

        <Text
          style={styles.footer}
          render={({ pageNumber, totalPages }) =>
            `Advanced Accounting, Taxation & Business Services — Engagement Letter — Page ${pageNumber} of ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default EngagementLetterPdf;
