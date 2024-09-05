// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Certificate {
    struct CertificateData {
        string name;
        string course;
        string dateIssued;
        address issuer;
        bool isValid;
    }
    
    mapping(uint256 => CertificateData) public certificates;
    uint256 public certificateCount;

    event CertificateIssued(uint256 indexed certificateId, string name, string course, string dateIssued, address indexed issuer);

    function issueCertificate(string memory _name, string memory _course, string memory _dateIssued) public {
        certificateCount++;
        certificates[certificateCount] = CertificateData(_name, _course, _dateIssued, msg.sender, true);
        emit CertificateIssued(certificateCount, _name, _course, _dateIssued, msg.sender);
    }

    function verifyCertificate(uint256 _certificateId) public view returns (string memory, string memory, string memory, address, bool) {
        CertificateData memory cert = certificates[_certificateId];
        require(cert.isValid, "Certificate is invalid");
        return (cert.name, cert.course, cert.dateIssued, cert.issuer, cert.isValid);
    }
}